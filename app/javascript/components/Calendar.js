import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import CalendarWeek from './CalendarWeek';
import { strict } from 'assert';

class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state ={events: week_events};
        this.current_week_start = start_of_week;

        for (let i = 0; i < this.state.events.length; i++) {
            this.state.events[i].start_datetime = new Date(this.state.events[i].start_datetime);
            this.state.events[i].end_datetime = new Date(this.state.events[i].end_datetime);
        }
    }

    render ()
    {
        return (
            <CalendarWeek 
                current_week_start={ new Date(this.current_week_start) } 
                week_days={this.get_week_days(this.current_week_start)} 
                events={this.state.events}
            />                        
        );
    }

    get_week_days (current_week_start) {
        var week_days = [];
        
        var day = new Date(current_week_start).getDate()
        var date;

        for (let i = day; i < day+7; i++) { 
            date = new Date(current_week_start);
            date.setDate(i);
            // Function returns a timestamp where we want the object
            week_days.push(date);
        }
        return week_days;
    }
    
}
export default Calendar;