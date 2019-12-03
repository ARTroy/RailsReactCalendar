import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import CalendarWeek from './CalendarWeek';
import { strict } from 'assert';

class Calendar extends React.Component {
    state = {
        events:[
            {
                id: 1,
                title: "Sleep",
                description:"Taking a nap",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-26T23:00:00'),
                end_datetime: new Date('2019-11-27T07:30:00'),
                is_recurring: false,
            },
            {
                id: 2,
                title: "Eat",
                description:"A fine dining experience",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-26T12:00:00'),
                end_datetime: new Date('2019-11-26T13:00:00'),
                is_recurring: false,
            },
            {
                id: 3,
                title: "Eat",
                description:"A fine dining experience",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-26T12:00:00'),
                end_datetime: new Date('2019-11-26T13:00:00'),
                is_recurring: false,
                generated_event: false
            },
            {
                id: 4,
                title: "Interview",
                description:"A future endeavour",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-26T15:00:00'),
                end_datetime: new Date('2019-11-26T16:00:00'),
                is_recurring: false,
            },
            {
                id: 6,
                title: "Big event",
                description: "Known to take a while",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-28T15:00:00'),
                end_datetime: new Date('2019-11-30T13:00:00'),
                is_recurring: false,
            }
        ],
    } 

    render ()
    {
        return (
            <CalendarWeek 
                current_week_start={ new Date("2019-11-25T00:00:00") } 
                week_days={this.get_week_days(new Date("2019-11-25T00:00:00"))} 
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
