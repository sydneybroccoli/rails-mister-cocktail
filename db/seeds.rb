require 'faker'
require 'open-uri'

puts 'Cleaning database...'
Cocktail.destroy_all
Ingredient.destroy_all
Dose.destroy_all

puts 'Creating new database...'
# SEED INGREDIENTS W/ JSON LIST
URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
data = JSON.parse(open(URL).read)
ingredients = []
data['drinks'].each do |item|
  ingredients << item['strIngredient1']
end

15.times do
  # CREATE COCKTAIL
  cocktail = Cocktail.new(name: Faker::Dessert.unique.flavor)
  cocktail.save

  3.times do
    # CREATE INGREDIENTS
    ingredient = Ingredient.new(name: ingredients.sample)
    ingredient.save

    # CREATE DOSE
    # add corresponding ingredient and cocktail ID
    dose = Dose.new(
      description: Faker::Food.measurement,
      ingredient_id: ingredient.id,
      cocktail_id: cocktail.id
    )
    dose.save
  end

  cocktail.save!
end
