Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # Main react single page app
    root to: 'calendar#index'
    

    get '/calendar' => 'calendar#index'
    put '/calendar' => 'calendar#update'
    get '/calendar/:day/:month/:year' => 'calendar#week_by_day_month_year'

    get '/event/new' => 'calendar#new'
    post '/event' => 'calendar#create'

    # User stuff
    get 'signup' => 'users#new', as: :new_user
    post 'users' => 'users#create'
  
    # log in page with form:
	get '/login'     => 'sessions#new'
	post '/login'    => 'sessions#create'
	
	# delete action to log out:
    delete '/logout' => 'sessions#destroy' 
    
    # get 'menu'  => 'calendar#index'
    #get '/calendar/:day' => 'calendar#week_by_day'
    #get '/calendar/:day/:month' => 'calendar#week_by_day_month'
end
