class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.integer :user_id
      t.string :title
      t.text :description
      t.text :text
      t.string :image
      t.boolean :published

      t.timestamps
    end
  end
end
