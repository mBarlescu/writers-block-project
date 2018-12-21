class CreateStoriesLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :stories_likes, id: false do |t|
      t.references :user, index: true
      t.references :story, index: true
    end
  end
end


