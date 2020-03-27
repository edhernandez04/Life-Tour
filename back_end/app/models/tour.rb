class Tour < ApplicationRecord
    has_many :listed_events
    has_many :events, through: :listed_events
    has_many :user_attendings
    has_many :users, through: :user_attendings
    belongs_to :user
end
