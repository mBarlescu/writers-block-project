class User < ApplicationRecord
  has_many :stories
  has_many :stories_like
  has_many :feedback
  has_many :feedback_likes
  has_many :comments
  has_many :follower_relationships, class_name: 'Relationship', foreign_key: 'follower_id'
  has_many :following_relationships, class_name: 'Relationship', foreign_key: 'following_id'
  has_many :followings, through: :follower_relationships
  has_many :followers, through: :following_relationships
end
