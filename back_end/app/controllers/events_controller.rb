class EventsController < ApplicationController

    def create
        
        event = Event.create(name: params[:event][:name], location: params[:event][:_embedded][:venues][0][:name], date: params[:event][:dates][:start][:localDate], category: params[:event][:type])
        
        listed_event = ListedEvent.create(tour_id: params[:tour_id], event_id: event.id)

        tour = Tour.all.find{|tour| tour.id === params[:tour_id]}

        byebug
        
        render json: {event: event, listed_event: listed_event}
        
    end
  
end
  