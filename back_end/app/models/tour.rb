class Tour < ApplicationRecord
    has_many :events, through: :listed_event
    has_many :users, through: :user_attending
    belongs_to :user
end
