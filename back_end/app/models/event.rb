class Event < ApplicationRecord
    has_many :listed_events
    has_many :tours, through: :listed_events
end
