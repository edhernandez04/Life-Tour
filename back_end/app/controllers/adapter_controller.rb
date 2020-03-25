class ApplicationController < ActionController::API

    def ticketmaster
        # Search parameters defined here
        byebug
        results = Adapter.search_events()

        render json: results
    end

    def ticketmaster_event
        id = params[:id]

        result = Adapter.search_event(id)

        render json: result
    end

end
