class Event < ApplicationRecord
    has_many :tours, through: :listed_event
end
