import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import CalendarWeek from './CalendarWeek';
import { strict } from 'assert';

class Calendar extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state ={events: week_events};
        this.current_week_start = start_of_week;
        this.update_event = this.update_event.bind(this);

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
                update_event={this.update_event}
            />                        
        );
    }

    update_event (new_event) {
        this.setState({ events: this.state.events.map(
            current_event => {
                if(current_event.id === new_event.id ){
                    current_event.title = new_event.title; 
                    current_event.description = new_event.description;
                    current_event.start_datetime = new_event.start_datetime;
                    current_event.end_datetime = new_event.end_datetime;
                }
                return current_event;
            }
        ) });
        
        this.event_update_ajax(new_event);
    }

    async event_update_ajax(event){
        var token = $( 'meta[name="csrf-token"]' ).attr( 'content' );
        let id = event.id;
        let new_event = {
            calendar_event: {
                "title" : event.title,
                "description": event.description,
                "start_datetime": event.start_datetime,
                "end_datetime": event.end_datetime
            }
        }

        var response = await fetch("/event/"+id,{
            method: 'PUT',
            body: JSON.stringify(new_event),
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            }
        });
        return await response.json()
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