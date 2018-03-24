Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todos
      resources :tutorials
    end
  end

  resources :todos, only: %i(index)
  resources :tutorials, only: %i(index)

end
