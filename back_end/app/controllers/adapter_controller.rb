class ApplicationController < ActionController::API

    def ticketmaster
        # Search parameters defined here

        results = Adapter.searchEvents()

        render json: results
    end

    def ticketmaster_event
        id = params[:id]

        result = Adapter.searchEvent(id)

        render json: result
    end

end
