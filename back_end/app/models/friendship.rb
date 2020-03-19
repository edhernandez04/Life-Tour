class Friendship < ApplicationRecord
    belong_to :follower, class_name: "User"
    belong_to :followee, class_name: "User"
end
