class EventsController < ApplicationController

    def create
        event = Event.create(name: event['name'], location: event["_embedded"]['venues'][0]['name'], date: event["dates"]["start"]["localDate"], category: event["type"])

        byebug
    end
  
  end
  