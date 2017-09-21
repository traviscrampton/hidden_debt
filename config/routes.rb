Rails.application.routes.draw do
  devise_for :users
  get 'hello_world', to: 'hello_world#index'

		devise_for :users
		root to:'home#index'
		get '/flow' => 'home#flow'

		resources :months
		resources :incomes
		resources :savings
		resources :debts
		resources :spendings
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
