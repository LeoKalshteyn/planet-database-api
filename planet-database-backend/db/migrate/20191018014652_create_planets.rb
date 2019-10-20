class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.float :mass
      t.float :radius
      t.float :semi_major_axis
      t.float :orbital_period
      t.float :eccentricity
      t.integer :discovery_year
      t.references :star_system, foreign_key: true

      t.timestamps
    end
  end
end
