Rails.application.routes.draw do
  resources :stories
  resources :stories_likes
  resources :genre_stories
  resources :genres
  resources :feedback_likes
  resources :feedbacks
  resources :segments
  resources :comments
  resources :followers
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
