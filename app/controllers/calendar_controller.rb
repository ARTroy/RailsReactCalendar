require "time"
class CalendarController < ApplicationController
    before_action :authorize

    def index
        @start_of_week = Date.current.beginning_of_week.to_time.to_formatted_s(:iso8601) 
        @end_of_week = Date.current.end_of_week.to_time.end_of_day

        @week_events = CalendarEvent
        .where("
            (start_datetime >= :start_datetime AND start_datetime <= :end_of_week) OR
            (end_datetime >= :start_datetime AND end_datetime <= :end_of_week)",{
                start_datetime: @start_of_week,
                end_of_week: @end_of_week
        })
        .where("user_id = ?", session[:user_id] )
        .to_json.html_safe
    end

    def week_by_day_month_year 
        day = params.has_key?(:day)
        month = params.has_key?(:month)
        year = params.has_key?(:year)
   
        abort(params[:year]+ " " + params[:month] + " " + params[:day]);

        if( year.match(/^{[12][0-9]{3}$/) && month.match(/^[01]?[0-9]\d+$/) && day.match(/^[0-3]?[0-9]\d+$/))
            given_date = Time.parse(year,month,day);
        else 
            given_date = beginning_of_week(Time.current)
        end
        
        @start_of_week = beginning_of_week(given_date)
        @end_of_week = end_of_week(given_date)
        
        @week_events = CalendarEvent.where("
            (start_datetime >= :start_datetime AND start_datetime <= :end_of_week) OR
            (end_datetime >= :start_datetime AND end_datetime <= :end_of_week)",{
                start_datetime: @start_of_week,
                end_of_week: @end_of_week
        })
        .where("user_id = ?", session[:user_id] )
        .to_json.html_safe       
    end

    def new()
        @calendar_event = CalendarEvent.new
    end

    def create 
        # Create object using new   
        start_datetime = calendar_params[:start_date]+"T"+calendar_params[:start_time]+":00+00:00"
        end_datetime = calendar_params[:end_date]+"T"+calendar_params[:end_time]+":00+00:00"
        duration_minutes = ((Time.parse(end_datetime) - Time.parse(start_datetime) ).to_i / 60).to_s

        new_params = { 
            start_datetime: start_datetime, end_datetime: end_datetime, duration_minutes: duration_minutes,
            title: calendar_params[:title], description: calendar_params[:description], user_id: session[:user_id]
        }

        @calendar_event = CalendarEvent.new(new_params)
        
        if( @calendar_event.save() ) 
            return redirect_to action:'index'
        else 
            return redirect_to action:'new'
        end
    end

    def update 
        @calendar_event = CalendarEvent.find(params[:id])
        if( @calendar_event.update(params) ) 
            return redirect action:'index'
        else 
            return redirect action:'new'
        end
    end

    def destroy
        @calendar_event = CalendarEvent.find(params[:id])
        @calendar_event.destroy()

        return redirect_to action: 'index' 
    end 

    private def calendar_params
        params.require(:calendar_event).permit(
            :title, :description, :start_datetime, :end_datetime, :is_recurring, :recurring_type, :duration_minutes,
            :start_date, :start_time, :end_date, :end_time
        )
    end
end
