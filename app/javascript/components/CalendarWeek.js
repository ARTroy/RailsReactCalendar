import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CalendarHeader from './CalendarHeader';
import CalendarTimeColumn from './CalendarTimeColumn';
import CalendarDay from './CalendarDay';
import { strict } from 'assert';

class CalendarWeek extends React.Component {

    constructor(props) {
        super(props);
    }   

    calculate_weekday_events (){
        this.week_days_events = {}

        // Assign events for this week to a nested object
        for (let i = 0; i < this.props.events.length; i++) {
            let event = this.props.events[i];
            let start_date = event.start_datetime.getDate();
            let end_date = event.end_datetime.getDate();

            // check if this needs to be added to other days
            if(start_date != end_date){  
                // We round down as this solves 2+ day differences,
                // but breaks day differences less than 24 hours, so we catch that with next
                var dif = Math.round((event.end_datetime - event.start_datetime)/86400000); 
                if(dif == 0){ dif = 1; }

                // Add day-spanning events to multiple days
                for(let j = 0; j <= dif; j++){
                    let next_start_day = new Date(event.start_datetime);
                    next_start_day.setDate(start_date+j);
                    
                    if(next_start_day in this.week_days_events){
                        this.week_days_events[next_start_day.getDate()].push(event);
                    } else {
                        this.week_days_events[next_start_day.getDate()] = [event];
                    }
                } 
            } else {
                if(start_date in this.week_days_events){ 
                    this.week_days_events[start_date].push(event);
                } else {
                    this.week_days_events[start_date] = [event];
                }
            }
        }
    }

    render ()
    {
        { this.calculate_weekday_events() }
        return (
            <div id="full_wrapper" className="full_wrapper">
                <div id="header_wrapper" className="grid-x small-up-8 grid-padding-x">
                    <CalendarHeader week_days={this.props.week_days} />
                </div>
                <div id="calendar_wrapper" className="grid-x small-up-8 grid-padding-x calendar_wrapper">
                    <CalendarTimeColumn />
                    <CalendarDay day={this.props.week_days[0]} day_events={this.week_days_events[this.props.week_days[0].getDate()]}/>
                    <CalendarDay day={this.props.week_days[1]} day_events={this.week_days_events[this.props.week_days[1].getDate()]}/>
                    <CalendarDay day={this.props.week_days[2]} day_events={this.week_days_events[this.props.week_days[2].getDate()]}/>
                    <CalendarDay day={this.props.week_days[3]} day_events={this.week_days_events[this.props.week_days[3].getDate()]}/>
                    <CalendarDay day={this.props.week_days[4]} day_events={this.week_days_events[this.props.week_days[4].getDate()]}/>
                    <CalendarDay day={this.props.week_days[5]} day_events={this.week_days_events[this.props.week_days[5].getDate()]}/>
                    <CalendarDay day={this.props.week_days[6]} day_events={this.week_days_events[this.props.week_days[6].getDate()]}/>
                </div>     
            </div>                        
        );
    }
}

export default CalendarWeek;