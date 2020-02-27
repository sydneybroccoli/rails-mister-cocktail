require 'faker'
require 'open-uri'

puts 'Cleaning database...'
Cocktail.destroy_all
Ingredient.destroy_all
Dose.destroy_all

puts 'Creating new database...'
# SEED INGREDIENTS W/ JSON LIST
Ingredient::INGREDIENTS.each do |item|
  Ingredient.create(name: item)
end

15.times do
  # CREATE COCKTAIL
  cocktail = Cocktail.new(name: Faker::Dessert.unique.flavor)
  cocktail.save

  3.times do
    # CREATE INGREDIENTS
    ingredient = Ingredient.all.uniq.sample

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
