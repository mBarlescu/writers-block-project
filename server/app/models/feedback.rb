class Feedback < ApplicationRecord
  belongs_to :user
  belongs_to :segment
  has_many :feedback_likes, dependent: :destroy
end





