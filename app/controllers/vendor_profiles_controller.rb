class VendorProfilesController < ApplicationController
  before_action :set_vendor_profile, only: %i[ show edit update destroy ]

  # GET /vendor_profiles or /vendor_profiles.json
  def index
    @vendor_profiles = VendorProfile.all
  end

  # GET /vendor_profiles/1 or /vendor_profiles/1.json
  def show
  end

  # GET /vendor_profiles/new
  def new
    @vendor_profile = VendorProfile.new
  end

  # GET /vendor_profiles/1/edit
  def edit
  end

  # POST /vendor_profiles or /vendor_profiles.json
  def create
    @vendor_profile = VendorProfile.new(vendor_profile_params)

    respond_to do |format|
      if @vendor_profile.save
        format.html { redirect_to vendor_profile_url(@vendor_profile), notice: "Vendor profile was successfully created." }
        format.json { render :show, status: :created, location: @vendor_profile }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @vendor_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vendor_profiles/1 or /vendor_profiles/1.json
  def update
    respond_to do |format|
      if @vendor_profile.update(vendor_profile_params)
        format.html { redirect_to vendor_profile_url(@vendor_profile), notice: "Vendor profile was successfully updated." }
        format.json { render :show, status: :ok, location: @vendor_profile }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @vendor_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vendor_profiles/1 or /vendor_profiles/1.json
  def destroy
    @vendor_profile.destroy

    respond_to do |format|
      format.html { redirect_to vendor_profiles_url, notice: "Vendor profile was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vendor_profile
      @vendor_profile = VendorProfile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vendor_profile_params
      params.fetch(:vendor_profile, {})
      params.require(:vendor_profile).permit(:name, :email, :phone, :address, :state, :city, :vendor_avatar, :vendor_id)
    end
end
