Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todos, only: %i(index create update destroy)
    end
  end

  resources :todos, only: %i(index)
end
