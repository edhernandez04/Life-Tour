class ListedEvent < ApplicationRecord
    belongs_to :tour
    belongs_to :event 
end
