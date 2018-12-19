class CreateStoriesLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :stories_likes do |t|
      t.integer :user_id
      t.integer :story_id

      t.timestamps
    end
  end
end
