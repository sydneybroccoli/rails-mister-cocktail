require 'faker'
require 'open-uri'

puts 'Cleaning database...'
Cocktail.destroy_all
Ingredient.destroy_all
Dose.destroy_all

puts 'Creating new database...'

25.times do
  # PARSE JSON
  url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  puts "Fetching cocktail..."
  data = JSON.parse(open(url).read)
  tmp = data['drinks'].first
  puts "\tCreating #{tmp['strDrink']}!"

  # SKIP IF NO COCKTAIL IS FOUND
  next if tmp.nil?

  # SKIP IF COCKTAIL EXISTS IN DB
  next if Cocktail.where(name: tmp['strDrink']).exists?

  # REMOVE ALL NULL VALUES
  tmp.delete_if { |_key, value| value.nil? }

  # CREATE COCKTAIL INSTANCE
  cocktail = Cocktail.new(
    name: tmp['strDrink'],
    category: tmp['strCategory'],
    alcoholic: tmp['strAlcoholic'],
    glass: tmp['strGlass'],
    instructions: tmp['strInstructions'],
    thumbnail_url: tmp['strDrinkThumb'] + '/preview'
    )
  cocktail.save!

  # FIND ALL INGREDIENTS AND DOSES
  ingredients = tmp.select { |key, value| key.match(/strIngredient\d+/) && !value.blank? }.values
  doses = tmp.select { |key, value| key.match(/strMeasure\d+/) && !value.blank? }.values

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
        cocktail_id: cocktail.id
      )
      dose.save!
      i += 1
    end

  # SAVE COCKTAIL
  cocktail.save!
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
