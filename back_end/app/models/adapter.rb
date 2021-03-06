require "json"
require "http"
require "optparse"

class Adapter

 API_KEY ="DkYEoE52FwN7kJPfi57pKCf73uKI3GTF"    
 # Consumer Secret
    
 # Constants, do not change these
 API_HOST = "https://app.ticketmaster.com"
 EVENTS_PATH = "/discovery/v2/events.json"
#  SORT = "date,asc"
 SIZE = 12
 

  def self.search_events(keyword, city)
      url = "#{API_HOST}#{EVENTS_PATH}"

      params = {
        apikey: API_KEY,
        keyword: keyword,
        city: city,
        size: SIZE
        # sort: SORT
      }

      response = HTTP.get("#{url}", params: params)
      response.parse

  end


    
  def self.search_event(event_id)
      url = "#{API_HOST}#{EVENTS_PATH}#{event_id}"

      params = {
        apikey: API_KEY
      }

      response = HTTP.get(url, params: params)
      response.parse
  end
    

end

