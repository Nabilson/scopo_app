class Dish < ApplicationRecord
	belongs_to :vendor
	has_one_attached :main_image

	
end
