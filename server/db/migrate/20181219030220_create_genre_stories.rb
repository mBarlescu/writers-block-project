class CreateGenreStories < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_stories do |t|
      t.integer :story_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
