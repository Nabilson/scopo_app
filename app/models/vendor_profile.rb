class VendorProfile < ApplicationRecord
	belongs_to :vendor	
	validates_uniqueness_of :vendor_id
	has_one_attached :vendor_avatar


	validates :vendor_id, presence: true
end
