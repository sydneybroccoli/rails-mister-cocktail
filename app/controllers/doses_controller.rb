class DosesController < ApplicationController
  before_action :find_cocktail, except: :destroy

  def new
    @dose = Dose.new
  end

  def create
    @dose = Dose.new( dose_params )
    @dose.cocktail_id = @cocktail.id
    @dose.save    
  end

  def destroy
    @dose = Dose.find(params[:id])
    if @dose.destroy
      respond_to do |format|
        format.html { redirect_to edit_cocktail_path(@cocktail) }
        format.js 
      end
    # else
    end

  end

  private

  def find_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

  def dose_params
    params.require(:dose).permit(:description, :ingredient_id)
  end


end
