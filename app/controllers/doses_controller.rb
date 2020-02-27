class DosesController < ApplicationController
  before_action :find_cocktail, except: :destroy

  def new
    @dose = Dose.new
  end

  def create
    @dose = Dose.new(
      description: params[:dose][:description],
      ingredient_id: params[:dose][:ingredient_id],
      cocktail_id: params[:cocktail_id]
    )
    if @dose.save
      redirect_to cocktail_path(id: params[:cocktail_id])
    else
      render 'new'
    end
  end

  def destroy
    @dose = Dose.find(params[:id])
    @dose.destroy
    redirect_to cocktail_path(params[:cocktail_id])
  end

  private

  def dose_params
    params.require(:dose).permit(:description, :cocktail_id, :ingredient_id)
  end

  def find_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

end
