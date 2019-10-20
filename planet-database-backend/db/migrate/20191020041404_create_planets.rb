class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :label
      t.text :information
      t.references :star_system, foreign_key: true

      t.timestamps
    end
  end
end
