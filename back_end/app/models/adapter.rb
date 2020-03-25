require "json"
require "http"
require "optparse"

class Adapter

 API_KEY =
 # Consumer Secret
    
 # Constants, do not change these
 API_HOST = "https://app.ticketmaster.com"
 EVENTS_PATH = "/discovery/v2/events.json"
#  SEARCH_LIMIT = 8

  def self.search(keyword, country)
    url = "#{API_HOST}#{EVENTS_PATH}"

    params = {
      keyword: keyword,
      countryCode: country,
      apikey: 
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

