Rails.application.routes.draw do
  root 'root#index'
  get 'root/index'
  namespace :api, defaults: { format: :json } do
    get 'random_greeting', to: 'greetings#random_greeting'
  end 
  get "up" => "rails/health#show", as: :rails_health_check
end
