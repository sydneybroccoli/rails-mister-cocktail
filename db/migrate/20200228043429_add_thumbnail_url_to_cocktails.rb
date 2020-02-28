class AddThumbnailUrlToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :thumbnail_url, :string
  end
end
