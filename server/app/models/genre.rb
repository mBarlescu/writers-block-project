class Genre < ApplicationRecord
  has_many :genre_stories
  has_many :stories, through: :genre_stories
end
