class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient

  validates :description, presence: true
  # validates :cocktail_id, uniqueness: {
  #   scope: :ingredient_id,
  #   message: 'cannot use an ingredient multiple times for one cocktail'
  # }

  paginates_per 10
  max_paginates_per 1000

  DOSES = []
end
