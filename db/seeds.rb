require 'faker'
require 'open-uri'

puts 'Cleaning database...'
Cocktail.destroy_all
Ingredient.destroy_all
Dose.destroy_all

puts 'Creating new database...'

("a".."z").each do |letter|
  # PARSE JSON
  url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=#{letter}"
  puts "Fetching all '#{letter}' cocktails..."
  data = JSON.parse(open(url).read)
  cocktails = data['drinks']

  # SKIP IF NO COCKTAILS ARE FOUND
  next if cocktails.nil?

  # ITERATE THROUGH EACH COCKTAIL
  cocktails.each do |cocktail|
    # REMOVE ALL NULL VALUES
    cocktail.delete_if { |_key, value| value.nil? }
    # CREATE COCKTAIL INSTANCE
    drink = Cocktail.new(
      name: cocktail['strDrink'],
      category: cocktail['strCategory'],
      alcoholic: cocktail['strAlcoholic'],
      glass: cocktail['strGlass'],
      instructions: cocktail['strInstructions'],
      thumbnail_url: cocktail['strDrinkThumb']
    )
    drink.save!

    # FIND ALL INGREDIENTS AND DOSES
    ingredients = cocktail.select { |key, value| key.match(/strIngredient\d+/) && !value.blank? }.values
    doses = cocktail.select { |key, value| key.match(/strMeasure\d+/) && !value.blank? }.values

    doses << '...' while ingredients.count > doses.count

    # CREATE INGREDIENT AND DOSE INSTANCES
    i = 0
    while i < ingredients.length
      # CHECK IF INGREDIENT EXIST

      if Ingredient.where(name: ingredients[i]).empty?
        ingredient = Ingredient.new(
          name: ingredients[i]
        )
        ingredient.save!
      else
        ingredient = Ingredient.where(name: ingredients[i])[0]
      end

      dose = Dose.new(
        description: doses[i],
        ingredient_id: ingredient.id,
        cocktail_id: drink.id
      )
      dose.save!
      i += 1
    end

    # SAVE COCKTAIL
    drink.save!
  end
end

# SEED INGREDIENTS W/ JSON LIST
# Ingredient::INGREDIENTS.each do |item|
#   Ingredient.create(name: item)
# end
# 15.times do
#   # CREATE COCKTAIL
#   cocktail = Cocktail.new(name: Faker::Dessert.unique.flavor)
#   cocktail.save
#   3.times do
#     # CREATE INGREDIENTS
#     ingredient = Ingredient.all.uniq.sample
#     # CREATE DOSE
#     # add corresponding ingredient and cocktail ID
#     dose = Dose.new(
#       description: Faker::Food.measurement,
#       ingredient_id: ingredient.id,
#       cocktail_id: cocktail.id
#     )
#     dose.save
#   end
#   cocktail.save!
# end
