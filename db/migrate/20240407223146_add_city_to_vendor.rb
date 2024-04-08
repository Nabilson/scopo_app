class AddCityToVendor < ActiveRecord::Migration[7.0]
  def change
    add_column :vendors, :city, :string
  end
end
