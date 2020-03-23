Rails.application.routes.draw do
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  
  post '/signup', to: 'users#create'
  post '/login', to: 'auth#login'
end
