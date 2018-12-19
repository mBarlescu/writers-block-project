class Story < ApplicationRecord
  belongs_to :user
  
  has_many :genre_stories
  has_many :story_likes
  has_many :segments
end
