import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CalendarWeek from './CalendarWeek';
import { strict } from 'assert';

class Calendar extends React.Component {
    state = {
        events:[
            {
                id: 1,
                title: "Sleep",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-26T23:00:00'),
                end_datetime: new Date('2019-11-26T23:30:00'),
                is_recurring: false,
            },
            {
                id: 2,
                title: "Eat",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-26T12:00:00'),
                end_datetime: new Date('2019-11-26T13:00:00'),
                is_recurring: false,
            },
            {
                id: 3,
                title: "Eat",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-11-27T12:00:00'),
                end_datetime: new Date('2019-12-26T13:00:00'),
                is_recurring: false,
            },
            {
                id: 4,
                title: "Interview",
                completed: false,
                duration: 60,
                start_datetime: new Date('2019-12-14T12:00:00'),
                end_datetime: new Date('2019-12-26T13:00:00'),
                is_recurring: false,
            }
        ],
    } 

    render ()
    {
        return (
            <Router>
                <Route exact path="/" render={props => (
                    <CalendarWeek 
                        current_week_start={ new Date("2019-11-25T00:00:00") } 
                        week_days={this.get_week_days(new Date("2019-11-25T00:00:00"))} 
                        events={this.state.events}/>                        
                )} />
                <Route path="/menu" render={props => (
                    <div><Link to='/'>Back</Link></div>
                )} />
            </Router>       
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
