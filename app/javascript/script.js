// $(function () { // Same as document.addEventListener("DOMContentLoaded"..)
	
//     // Same as document.querySelector("#navbarToggle").addEventListener("blur")
// 	$(".navbar-toggle").blur(function (event) {
// 		var screenWidth = window.innerWidth;
// 		if(screenWidth < 768) {
// 			$("#collapsable-nav").collapse('hide'); //Jquery library
// 		}
// 	});
// });

(function (global) {

	var dc = {};
	var homeHtml = "home-snippet.html";
	//var homeHtml = "app/views/snippets/home-snippet.html";
	var allCategoriesUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html"
	var menuItemsUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";
	var menuItemsTitleHtml ="snippets/menu-items-title.html" ;
	var menuItemHtml = "snippets/menu-item.html";

	//convenience function for inserting innerHTML for 'select'
	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	// Show loading icon inside wlwment identified by selector
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		//html+= "<%= image_tag('ajax-loader.gif'), :alt => 'loading' %></div>";
		html+= "<img src='ajax-loader.gif'></div>";
		insertHtml(selector, html);
	};
	
// // Return substitute of '{{propName}}'
// // with propValue in given 'string'
// var insertProperty = function (string, propName, propValue) {
// 	var propToReplace = "{{" + propName + "}}";
// 	string = string.replace(new RegExp(propToReplace, "g"), propValue);
// 		return string;
// }

// On first load, show home view
document.addEventListener("DOMContentLoaded", function (event) {

showLoading("#main-content");

$ajaxUtils.sendGetRequest(
	homeHtml,
	function (request) {
		document.querySelector("#main-content").innerHTML = request;
	},
	false);
	console.log(request.responseText);
});


// dc.loadHomePage = function () {
// 	showLoading("#main-content");
// 	$ajaxUtils.sendGetRequest(homeHtml, function (request) {
// 		document.querySelector("#main-content").innerHTML = request;
// 	},
// 	false);
// };


// // Load the menu items view
//   // 'categoryShort' is a short_name for a category
//   dc.loadMenuItems = function (categoryShort) {
//     showLoading("#main-content");
//     $ajaxUtils.sendGetRequest(
//       menuItemsUrl + categoryShort + ".json",
//       buildAndShowMenuItemsHTML
//     );
//   };


// //Builds HTML for the categories page based on the data
// //from the server
// function buildAndShowCategoriesHTML(categories) {
// 	//Builds HTML for the categories page based on the data
// 	$ajaxUtils.sendGetRequest(categoriesTitleHtml,
// 		function (categoriesTitleHtml) {
// 		// Retrieve single category snippet
// 		$ajaxUtils.sendGetRequest(
// 			categoryHtml, function (categoryHtml) {
// 				switchMenuToActive();

// 				var categoriesViewHtml = 
// 					buildCategoriesViewHtml(categories,
// 						categoriesTitleHtml, categoryHtml);
// 				insertHtml("#main-content", categoriesViewHtml);
// 			}, false);
// 	},false);

// }

// function buildAndShowMenuItemsHTML(categoryMenuItems) {
// 	//load title snippet of menu items page
// 	$ajaxUtils.sendGetRequest(menuItemsTitleHtml,
// 		function (menuItemsTitleHtml) {
// 		// Retrieve single menu item snippet
// 		$ajaxUtils.sendGetRequest(
// 			menuItemHtml, function (menuItemHtml) {
// 				switchMenuToActive();

// 				var menuItemsViewHtml = 
// 					buildMenuItemsViewHtml(categoryMenuItems,
// 						menuItemsTitleHtml, menuItemHtml);
// 				insertHtml("#main-content", menuItemsViewHtml);
// 			}, false);
// 	},false);

// }

// function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {
// 	var finalHtml = categoriesTitleHtml;
// 	finalHtml += "<section class='row'>";
 
// 	// Loop over categories
// 	for (var i = 0; i<categories.length; i++) {
// 		// Insert category values
// 		var html = categoryHtml;
// 		var name = "" + categories[i].name;
// 		var short_name = categories[i].short_name;
// 		html=insertProperty(html, "name", name);
// 		html=insertProperty(html, "short_name", short_name);
// 		finalHtml += html;
// 	}

// 	finalHtml +="</section>";
// 	return finalHtml;
// }

// // Using category and menu items data and snippets html
//   // build menu items view HTML to be inserted into page
//   function buildMenuItemsViewHtml(
//     categoryMenuItems,
//     menuItemsTitleHtml,
//     menuItemHtml
//   ) {
//     menuItemsTitleHtml = insertProperty(
//       menuItemsTitleHtml,
//       "name",
//       categoryMenuItems.category.name
//     );
//     menuItemsTitleHtml = insertProperty(
//       menuItemsTitleHtml,
//       "special_instructions",
//       categoryMenuItems.category.special_instructions
//     );

//     var finalHtml = menuItemsTitleHtml;
//     finalHtml += "<section class='row'>";

//     // Loop over menu items
//     var menuItems = categoryMenuItems.menu_items;
//     var catShortName = categoryMenuItems.category.short_name;
//     for (var i = 0; i < menuItems.length; i++) {
//       // Insert menu item values
//       var html = menuItemHtml;
//       html = insertProperty(html, "short_name", menuItems[i].short_name);
//       html = insertProperty(html, "catShortName", catShortName);
//       html = insertItemPrice(html, "price_small", menuItems[i].price_small);
//       html = insertItemPortionName(
//         html,
//         "small_portion_name",
//         menuItems[i].small_portion_name
//       );
//       html = insertItemPrice(html, "price_large", menuItems[i].price_large);
//       html = insertItemPortionName(
//         html,
//         "large_portion_name",
//         menuItems[i].large_portion_name
//       );
//       html = insertProperty(html, "name", menuItems[i].name);
//       html = insertProperty(html, "description", menuItems[i].description);

//       // Add clearfix after every second menu item
//       if (i % 2 != 0) {
//         html +=
//           "<div class='clearfix visible-lg-block visible-md-block'></div>";
//       }

//       finalHtml += html;
//     }

//     finalHtml += "</section>";
//     return finalHtml;
//   }

// // Appends price with '$' if price exists
//   function insertItemPrice(html, pricePropName, priceValue) {
//     // If not specified, replace with empty string
//     if (!priceValue) {
//       return insertProperty(html, pricePropName, "");
//     }

//     priceValue = "$" + priceValue.toFixed(2);
//     html = insertProperty(html, pricePropName, priceValue);
//     return html;
//   }

//   // Appends portion name in parens if it exists
//   function insertItemPortionName(html, portionPropName, portionValue) {
//     // If not specified, return original string
//     if (!portionValue) {
//       return insertProperty(html, portionPropName, "");
//     }

//     portionValue = "(" + portionValue + ")";
//     html = insertProperty(html, portionPropName, portionValue);
//     return html;
//   }

// // Remove the class 'active' from home and switch to Menu button
//   var switchMenuToActive = function () {
//     // Remove 'active' from home button
//     var classes = document.querySelector("#navHomeButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navHomeButton").className = classes;

//     // Add 'active' to menu button if not already there
//     classes = document.querySelector("#navMenuButton").className;
//     if (classes.indexOf("active") == -1) {
//       classes += " active";
//       document.querySelector("#navMenuButton").className = classes;
//     }
//   };

global.$dc = dc;

})(window);