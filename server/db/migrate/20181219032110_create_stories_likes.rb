class CreateStoriesLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :stories_likes, id: false do |t|
      t.belongs_to :user_id, index: true
      t.belongs_to :story_id, index: true
    end
  end
end


