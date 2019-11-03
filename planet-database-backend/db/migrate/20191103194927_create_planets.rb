class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :label
      t.string :planet_mass
      t.string :radius
      t.string :semimajor_axis
      t.string :orbital_period
      t.string :eccentricity
      t.string :discovery_year
      t.references :star, foreign_key: true

      t.timestamps
    end
  end
end
