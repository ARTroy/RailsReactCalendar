require "time"
class CalendarController < ApplicationController
    before_action :authorize

    def index
        @date = Time.current;
        @start_of_week = Date.current.beginning_of_week.to_time
        @end_of_week = Date.current.end_of_week.to_time.end_of_day
        #abort(@date.to_formatted_s(:iso8601) + " | " +
        #    @start_of_week.to_formatted_s(:iso8601)+ " | " +
        #    @end_of_week.to_formatted_s(:iso8601) 
        #);

        @week_events = CalendarEvent.where("
            (start_datetime >= :start_datetime AND start_datetime <= :end_of_week) OR
            (end_datetime >= :start_datetime AND end_datetime <= :end_of_week)",{
                start_datetime: @start_of_week,
                end_of_week: @end_of_week
            }
        ).to_json
    end

    def week_by_day_month_year 
        params.has_key?(:day)
        params.has_key?(:month)

        puts( params[:year]+ " " + params[:month] + " " + params[:day])
        #if( params.has_key?(:day) &&    params[:day].is_a? Integer &&
        #    params.has_key?(:month) &&  params[:month].is_a? Integer &&
        #    params.has_key?(:year) &&   params[:year].is_a? Integer 
        #)
        #    @date = Time.parse("");
        #else 
        #    @date = beginning_of_week(@date)
        #end
        #
        #@start_of_week = beginning_of_week(@date)
        #@end_of_week = end_of_week(@date)
        #
        #week_events = CalendarEvent.where("
        #    (start_datetime >= :start_datetime AND start_datetime <= :end_of_week) OR
        #    (end_datetime >= :start_datetime AND end_datetime <= :end_of_week)",{
        #        start_datetime: @start_of_week,
        #        end_of_week: @end_of_week
        #    }
        #)
    end

    def create
        #render plain: params[:post].inspect
        @post = CalendarEvent.new(post_params)
        if( @post.save() ) 
            return redirect_to @post 
        else 
            return render 'new'
        end
    end

    def update 
        @post = Post.find(params[:id])
        if( @post.update(post_params) ) 
            return redirect_to @post 
        else 
            return render 'edit'
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy()
        return redirect_to posts_path 
    end 

    private def calendar_params
        params.require(:post).permit(
            :title, :description, :start_datetime, :end_datetime, :is_recurring,:recurring_type
        )
    end
end
