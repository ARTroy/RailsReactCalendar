Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # Main react single page app
    root to: 'calendar#index'
    
    get 'menu'  => 'calendar#index'

    # User stuff
    get 'signup' => 'users#new', as: :new_user
    post 'users' => 'users#create'
  
    # log in page with form:
	get '/login'     => 'sessions#new'
	post '/login'    => 'sessions#create'
	
	# delete action to log out:
	delete '/logout' => 'sessions#destroy'  
end
