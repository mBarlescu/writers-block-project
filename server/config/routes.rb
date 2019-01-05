Rails.application.routes.draw do

  root to: 'api/stories#index' , defaults: { format: :json }

  namespace :api, defaults: { format: :json } do 

    resources   :stories do
      get       :new, :segments
      post      :like, :publish
    end
    resources   :feedbacks, only: [:new, :create, :destroy ] do 
      resources :feedbacks_likes, only: [:create]
    end
    resources :users do 
      resources :relationships, only: [:create, :destroy]
      get     :draft
      post    :draft
    end
    resources :comments, only: [:new, :create, :destroy ] do 
      resources :comments_likes, only: [:create]
    end

    resources   :stories_likes , only: [:create]
  

  resources :genres , only: [:index] do
    member do
      get 'stories'
    end
  end
      


    resources :sessions, path: '/login', only:[:create] 
    delete '/logout', to: 'sessions#destroy'
    resources :sessions, only:[:index] 
    
  end

end


