class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail
      .includes(:doses, :ingredients)
    @cocktails_paginated = Kaminari
      .paginate_array(@cocktails)
      .page(params[:page])
      .per(2000)

    respond_to do |format|
      format.js
      format.html
    end
  end

  def show
    @cocktail = Cocktail.find(params[:id])
    if @cocktail.doses
      @doses = @cocktail.doses
        .includes(:ingredient)
      @doses_paginated = Kaminari
        .paginate_array(@doses)
        .page(params[:page])
        .per(10)
    else
      @dose = Dose.new
    end

  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    @cocktail = Cocktail.new(cocktail_params)
    if @cocktail.thumbnail_url.empty?
      @cocktail.thumbnail_url = 'https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    end
    if @cocktail.save
      redirect_to cocktail_path(@cocktail.id)
    else
      render :new
    end
  end

  def edit
    @cocktail = Cocktail.find(params[:id])
  end

  def update
    @cocktail = Cocktail.find(params[:id])
    @cocktail.update(cocktail_params)
    redirect_to cocktail_path(@cocktail.id)
  end

  def destroy
    @cocktail = Cocktail.find(params[:id])
    @cocktail.destroy
    redirect_to cocktails_path
  end

  def new_dose
    respond_to do |format|
      format.html
      format.json
      format.js
    end
  end

  private

  def cocktail_params
    params.require(:cocktail).permit(:name, :alcoholic, :glass, :thumbnail_url, :instructions, :dose, :ingredient)
  end
end
