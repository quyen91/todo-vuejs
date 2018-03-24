class CreateTutorials < ActiveRecord::Migration[5.1]
  def change
    create_table :tutorials do |t|
      t.string :name
      t.text :links
      t.integer :status, default: 0
      t.integer :level, default: 0
      t.datetime :last_viewed

      t.timestamps
    end
  end
end
