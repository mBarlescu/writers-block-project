class CreateSegments < ActiveRecord::Migration[5.2]
  def change
    create_table :segments do |t|
      t.integer :story_id
      t.text :text

      t.timestamps
    end
  end
end
