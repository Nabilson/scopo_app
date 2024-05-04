Rails.application.routes.draw do
  resources :vendor_profiles
  devise_for :customers, controllers: {sessions: 'customers/sessions', registrations: 'customers/registrations'}
  devise_for :vendors
  devise_scope :customer do
    get 'customers/sign_out' => "devise/sessions#destroy"
  end
  resources :dishes
  #get 'home/index'
  get   'home/about'
  root 'home#index'
  #root 'dishes#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
