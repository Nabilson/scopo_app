class AddVendorIdToVendorPofiles < ActiveRecord::Migration[7.0]
  def change
    add_column :vendor_profiles, :vendor_id, :integer
  end
end