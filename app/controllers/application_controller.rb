class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user

    def current_user
        # Look up the current user based on user_id in the session cookie:
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorize
        if(current_user.nil?) 
            flash.now.alert = 'You must be logged in to access this page.'
            redirect_to login_path
        end
    end
end