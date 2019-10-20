class CreateStarSystems < ActiveRecord::Migration[5.2]
  def change
    create_table :star_systems do |t|
      t.string :name
      t.string :distance
      t.string :apparent_magnitude
      t.string :mass

      t.timestamps
    end
  end
end
