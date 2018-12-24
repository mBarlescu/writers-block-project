Rails.application.routes.draw do

  root to: 'api/stories#index' , defaults: { format: :json }

  namespace :api, defaults: { format: :json } do 
    resources   :stories do
      resources :stories_likes, only: [:create]
      post      :read, :like
      get :likes, :number_of_likes
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
    resources :sessions, path: '/login', only:[:create] 
    resources :sessions, path: '/logout', only:[:destroy] 
    
  end

end


