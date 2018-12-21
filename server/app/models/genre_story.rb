class GenreStory < ApplicationRecord
  belongs_to :story
  belongs_to :genre
  validates :story, uniqueness: { scope: :genre}
end
