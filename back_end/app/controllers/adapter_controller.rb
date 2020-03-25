class AdapterController < ActionController::API

    def search_events
        keyword = params[:keyword]
        city = params[:city]

        results = Adapter.search_events(params[:keyword], params[:city])

        byebug

        render json: results
    end

    def search_event
        id = params[:id]

        result = Adapter.search_event(id)

        render json: result
    end

end
