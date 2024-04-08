class AddVendorIdToDishes < ActiveRecord::Migration[7.0]
  def change
    add_column :dishes, :vendor_id, :integer
    add_index :dishes, :vendor_id
    remove_column :dishes, :dish_id, :integer
  end
end
