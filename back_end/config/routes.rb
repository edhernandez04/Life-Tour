Rails.application.routes.draw do
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  post '/signup', to: 'users#create'
  post '/login', to: 'auth#login'

  get '/auto_login', to: 'auth#auto_login'

  post '/search_events', to: 'adapter#search_events'
  post '/search_event', to: 'adapter#search_event'
end
