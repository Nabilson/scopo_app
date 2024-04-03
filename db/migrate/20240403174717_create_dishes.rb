class CreateDishes < ActiveRecord::Migration[7.0]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :category
      t.integer :dish_id

      t.timestamps
    end
  end
end
