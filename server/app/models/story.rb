class Story < ApplicationRecord
  belongs_to :user
  has_many :genre_stories
  has_many :stories_like
  has_many :comments
  has_many :genres, through: :genre_stories
  has_many :segments



  def self.find_stories_by_author(author_id, story_id)
    puts(Story.where(user_id: author_id, published: true).where.not(id: story_id))
    Story.where(user_id: author_id, published: true).where.not(id: story_id)
  end

  def self.find_published_stories_by_genre(genre_id)
    genre = Genre.find(genre_id)
    genre.stories.where(published: true)
  end

  def self.find_most_popular_stories
    StoriesLike.select("story_id, count(story_id) as likes").group("story_id").order("likes DESC").first(20)
  end

  def self.find_newest_stories
    Story.all.order("created_at DESC").first(20)
  end

  def self.find_published_stories_by_user(user_id)
    Story.where(published: true, user_id: user_id)
  end

  def self.find_unpublished_stories_by_user(user_id)
    Story.where(published: false, user_id: user_id)
  end

end
