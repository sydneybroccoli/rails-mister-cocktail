class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient

  validates :description, presence: true
  validates :cocktail_id, uniqueness: {
    scope: :ingredient_id,
    message: 'cannot use an ingredient multiple times for one cocktail'
  }
end
