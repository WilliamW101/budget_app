Rails.application.routes.draw do

  root 'home#index'

  namespace :api, defaults: { format: :json } do
    resources :expenses, except: [:new, :edit]
  end
end
