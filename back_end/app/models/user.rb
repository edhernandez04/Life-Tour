class User < ApplicationRecord
    has_many :tours, through: :user_attending
    has_many :tours
    has_many :followers, foreign_key: :follower_id, class_name: "Friendship" 
    has_many :followee, through: :followers
    has_many :followee, foreign_key: :followee_id, class_name: "Friendship" 
    has_many :followers, through: :followee
end
