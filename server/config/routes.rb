Rails.application.routes.draw do

  root to: 'api/stories#index' , defaults: { format: :json }

  namespace :api, defaults: { format: :json } do 

    resources   :stories do
      get       :new, :segments
      post      :publish
    end
    resources   :feedbacks, only: [:new, :create, :destroy ] 

    resources :users do 
      resources :relationships, only: [:create, :destroy]
    end
    resources :comments, only: [:new, :create, :destroy ] do 
      resources :comments_likes, only: [:create]
    end

    resources :stories_likes , only: [:create, :destroy]
    resources :feedback_likes , only: [:create, :destroy]
  

  resources :genres , only: [:index] do
    member do
      get 'stories'
    end
  end
      

    get 'drafts', to: 'stories#drafts'
    post 'upload', to: 'stories#upload'
    resources :sessions, path: '/login', only:[:create] 
    delete '/logout', to: 'sessions#destroy'
    resources :sessions, only:[:index] 
    
  end

end


