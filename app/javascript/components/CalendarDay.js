import React from 'react';
import EventEditForm from './EventEditForm';

class CalendarDay extends React.Component {
    constructor(props) {
        super(props);    
        this.foundation_modal = React.createRef();
        this.foundation_modal_form = React.createRef();
        this.show_foundation_modal = this.show_foundation_modal.bind(this);
        this.close_foundation_modal = this.close_foundation_modal.bind(this);
    }

    render () {
        if (this.props.day_events !== undefined) {
            var modal = (
                <div ref={ this.foundation_modal } 
                    id={ "modal_day_"+this.props.day.id } 
                    className="reveal-modal" 
                    data-reveal 
                    aria-hidden="true" 
                    role="dialog" 
                    data-animation-in="fade-in fast" 
                    data-animation-out="fade-out fast"
                    style={ { display:"none" } }>
                        
                    <EventEditForm ref={ this.foundation_modal_form } 
                        day_event={ this.props.day_events[0] } 
                        update_event={ this.props.update_event } 
                        close_self={ this.close_foundation_modal } 
                    />
                    <a className="close-reveal-modal" aria-label="Close" onClick={ this.close_foundation_modal }>&#215;</a>
                </div>
            );
        } else {
            var modal = ""
        }

        return (
            <React.Fragment>
                <div className="cell calendar_column" id={ "day_"+this.props.day.getDate() }>
                    { this.events() }      
                </div>
                { modal }
            </React.Fragment>
        );
    }

    events() {
        if(this.props.day_events !== undefined) {
            var events_jsx = []

            for (let i = 0; i < this.props.day_events.length; i++) { 
                let day_event = this.props.day_events[i]; 
                
                if (day_event) {
                    // if event start is not today, set time to 0, which is midnight
                    if (this.props.day.getDate() > day_event.start_datetime.getDate()) {
                        var event_start = 0;
                    } else {
                        var event_start = day_event.start_datetime.getHours()*(60*pixels_per_minute) + day_event.start_datetime.getMinutes();
                    }

                    // if event end is not today, set it to max - start time
                    if (this.props.day.getDate() < day_event.end_datetime.getDate()) {
                        var duration = 936 - event_start; // 936 = 24 * 60 * pixels_per_minute, as 24 hours is max
                    } else {
                        var duration = day_event.end_datetime.getHours()*(60*pixels_per_minute)+ day_event.end_datetime.getMinutes()- event_start;
                    }           

                    events_jsx.push(
                        <div className="day_event" 
                                style={ { top:event_start, height:duration } }
                                onClick={ () => this.show_foundation_modal(day_event) }
                                data-id={ "day_event_"+day_event.id }>
                            <div style={ { display:"block",height:"8px" } }></div>    
                            <span>{day_event.title}</span>
                            <div style={ { display:"block",height:"8px",bottom:"0px",position:"absolute",width:"96%" } }></div>
                        </div>
                    );
                }
            }
        }
        return events_jsx;
    }

    show_foundation_modal(day_event) {
        this.foundation_modal_form.current.rebuild(day_event);
        $(this.foundation_modal.current).foundation('open');
    }

    close_foundation_modal() {      
        $(this.foundation_modal.current).foundation('close');
        event.preventDefault();
    }
}

const pixels_per_minute = 0.65;

export default CalendarDay;