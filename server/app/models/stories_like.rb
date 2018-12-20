class StoriesLike < ApplicationRecord

  def stories_likes (id) 
    StoriesLike.where(story_id: id)
  end

end
