class Story < ApplicationRecord
  belongs_to :user
  has_many :genre_stories
  has_many :stories_like
  has_many :comments
  has_many :genres, through: :genre_stories
  has_many :segments

  

end
