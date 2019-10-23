class AddImageToStarSystems < ActiveRecord::Migration[5.2]
  def change
    add_column :star_systems, :image, :string
  end
end
