Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # Main react single page app
    root to: 'calendar#index'

    get '/calendar' => 'calendar#index'
    get '/calendar/:day/:month/:year' => 'calendar#week_by_day_month_year'

    get '/event/new' => 'calendar#new'
    post '/event' => 'calendar#create'
    put '/event/:id' => 'calendar#update'

    # User stuff
    get 'signup' => 'users#new', as: :new_user
    post 'users' => 'users#create'
  
    # log in page with form:
	get '/login'     => 'sessions#new'
	post '/login'    => 'sessions#create'
	
    # delete action to log out:
    get '/logout' => 'sessions#destroy' 
    delete '/logout' => 'sessions#destroy' 
    
end
