Rails.application.routes.draw do
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  
  post '/signup', to: 'users#create'
  post '/login', to: 'auth#login'

  get '/auto_login', to: 'auth#auto_login'

  post '/search_events', to: 'adapter#search_events'
  post '/search_event', to: 'adapter#search_event'

  get '/tours', to: 'tours#index'
  post '/tours', to: 'tours#create'
  # patch '/tours/:id', to: 'tours#update'
  # delete '/tours/:id', to: 'tours#destory'

end
