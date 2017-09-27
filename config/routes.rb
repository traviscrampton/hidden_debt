Rails.application.routes.draw do
	  devise_for :users
	  get 'hello_world', to: 'hello_world#index'
		root to:'home#index'
		get '/flow' => 'home#flow'
		get '/flows' => 'flows#index';

		resources :months
		resources :incomes
		resources :savings
		resources :debts
		resources :spendings
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
