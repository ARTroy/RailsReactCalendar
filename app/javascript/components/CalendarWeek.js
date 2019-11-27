import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CalendarHeader from './CalendarHeader';
import CalendarTimeColumn from './CalendarTimeColumn';
import CalendarDay from './CalendarDay';
import { strict } from 'assert';

class CalendarWeek extends React.Component {

    constructor(props) {
        super(props)
    }   

    calculate_weekday_events (){
        this.week_days_events = {}

        // Assign events for this week to a nested object
        for (let i = 0; i < this.props.events.length; i++) { 
            if(this.props.events[i].start_datetime.getDate() in this.week_days_events){
                this.week_days_events[this.props.events[i].start_datetime.getDate()].push(this.props.events[i]);
            } else {
                this.week_days_events[this.props.events[i].start_datetime.getDate()] = [this.props.events[i]];
            }  
        }
        return;
    }

    render ()
    {
        { this.calculate_weekday_events() }
        return (
            <div id="full_wrapper">
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