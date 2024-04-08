class RemoveDishIdFromDishes < ActiveRecord::Migration[7.0]
  def change
    remove_column :dishes, :dish_id, :integer
  end
end
