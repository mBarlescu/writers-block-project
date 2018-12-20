class User < ApplicationRecord
  has_many :stories
  has_and_belongs_to_many :stories
  has_many :feedback
  has_many :feedback_likes
  has_many :followers
  has_many :comments
end
