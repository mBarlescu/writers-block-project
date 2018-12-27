class CreateSegments < ActiveRecord::Migration[5.2]
  def change
    create_table :segments do |t|
      t.references :story, index: true
      t.text :text
      t.integer :position

      t.timestamps
    end
  end
end
