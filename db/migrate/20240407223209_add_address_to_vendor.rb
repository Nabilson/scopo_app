class AddAddressToVendor < ActiveRecord::Migration[7.0]
  def change
    add_column :vendors, :address, :string
  end
end
