class CreateGenreStories < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_stories, id: false do |t|
      t.references :story, index: true
      t.references :genre, index: true
    end
  end
end
