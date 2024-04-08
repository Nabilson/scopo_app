class AddDishIdToVendors < ActiveRecord::Migration[7.0]
  def change
    add_column :vendors, :dish_id, :integer
    add_index :vendors, :dish_id
  end
end
