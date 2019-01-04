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


  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, :uniqueness => {:case_sensitive => false}
  validates :password, length: { minimum: 4 }, confirmation: true
  validates :password_confirmation, presence: true

  def self.authenticate_with_credentials(email, password) 
    user = User.find_by(email: email.downcase.strip)
    if user && user.authenticate(password)
      user
    else
      nil
    end

  end

  def self.writers_with_published_stories
    User.joins(:stories).where(stories: {published: true}).uniq
  end

end
