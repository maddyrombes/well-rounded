Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  resources :users

  resources :ratings

  resources :users do
    resources :ratings
  end
end