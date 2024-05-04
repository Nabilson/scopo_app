class Vendor < ApplicationRecord

  #attr_accessible :email, :password, :password_confirmation, :remember_me, :vendor_profile_attributes

  has_many :dishes
  has_many :orders

  has_one :vendor_profile, :dependent => :destroy
  before_create  :create_vendor_profile

  accepts_nested_attributes_for :vendor_profile

  def create_vendor_profile
    vendor_profile = build_vendor_profile(:name => "Vendor Name", :email => "vendor@email.com",  :phone => "000 000 0000",)
  end


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

end
