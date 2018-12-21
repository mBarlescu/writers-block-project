class Relationship < ApplicationRecord
  belongs_to :follower, class_name: "User", foreign_key: "follower_id"
  belongs_to :following, class_name: "User", foreign_key: "following_id"

  validates :follower_id, presence: true
  validates :following_id, presence: true


  validates :follower_id, uniqueness: { scope: :following_id, message: "ALREADY EXISTS! Sorry, please follow someone else." }
end
