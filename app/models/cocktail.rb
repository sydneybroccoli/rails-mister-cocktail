class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses

  validates :name, presence: true, uniqueness: true

  paginates_per 20
  max_paginates_per 1000

  ALCOHOLIC = [
    'Alcoholic', 
    'Virgin/Non-Alcoholic', 
    '(Non) Alcoholic'
  ]
  GLASS = [
    'Old Fashioned Glass',
    'Rocks Glass',
    'Cosmopolitan Glass',
    'Highball Glass',
    'Collins Glass',
    'Zombie Glass',
    'Weizen Glass',
    'Pilsner Glass',
    'Sling Glass',
    'Pint Glass',
    'Beer Mug',
    'Irish Coffee Glass',
    'Red Wine Glass',
    'White Wine Glass',
    'Balloon Wine Glass',
    'Wine Tasting Glass',
    'Sherry Glass',
    'Champange Flute',
    'Martini Glass',
    'Margarita Glass',
    'Goblet Glass',
    'Pokal Glass',
    'Milkshake Glass',
    'Hurricane Glass',
    'Poco Grande Glass',
    'Brandy Snifter',
    'Wobble Cognac Glass',
    'Tulip Glass',
    'Grappa Glass',
    'Cordial Glass',
    'Cordial Glass',
    'Absinthe Glass',
    'Vodka Glass',
    'Shooter Glass',
    'Shot Glass',
    'Any Old Cup'
  ]

end
