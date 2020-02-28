class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses

  validates :name, presence: true, uniqueness: true

  CATEGORIES = []
  ALCHOLIC = ['Alcoholic', 'Non-Alcoholic']
  GLASS = []
end
