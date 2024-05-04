class CreateVendorProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :vendor_profiles do |t|
      t.string :name
      t.text :address
      t.string :state
      t.string :city
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
