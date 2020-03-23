require "json"
require "http"
require "optparse"

class Adapter

 API_KEY ="DkYEoE52FwN7kJPfi57pKCf73uKI3GTF"    
 # Consumer Secret
    
 # Constants, do not change these
 API_HOST = "https://app.ticketmaster.com"
 EVENTS_PATH = "/discovery/v2/events"
#  SEARCH_LIMIT = 8

    def self.search(keyword, location)
     url = "#{API_HOST}#{EVENTS_PATH}"

     params = {
       keyword: keyword,
       location: location
    #    limit: SEARCH_LIMIT,
     }
     response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
     response.parse

    end

    # def self.business_reviews(business_id)
    # url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}/reviews"
    # response = HTTP.auth("Bearer #{API_KEY}").get(url)
    # response.parse["reviews"]
    # end
    
    # def self.business(business_id)
    # url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"
    # response = HTTP.auth("Bearer #{API_KEY}").get(url)
    # response.parse
    # end
    

end

