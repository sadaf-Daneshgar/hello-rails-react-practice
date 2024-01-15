# config/routes.rb
Rails.application.routes.draw do
  root 'root#index'
  get 'root/index'
  namespace :api do
    get 'greetings/random', to: 'greetings#random'
  end
  get "up" => "rails/health#show", as: :rails_health_check
end
