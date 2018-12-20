class Story < ApplicationRecord
  belongs_to :user
  
  has_many :genre_stories
  has_and_belongs_to_many :users
  has_many :segments

  def test (story)
    story.StoriesLike.find
  end

end
