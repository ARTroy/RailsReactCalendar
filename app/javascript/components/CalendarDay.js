import React from 'react';

class CalendarDay extends React.Component {
    
    render ()
    {
        return (
            <div className="cell calendar_column" id={"day_"+this.props.day.getDate()}>
                {this.events()}
            </div>
        )
    }

    events(){
        if(this.props.day_events !== undefined){
            var events_jsx = []

            for (let i = 0; i < this.props.day_events.length; i++) { 
                var day_event = this.props.day_events[i]; 
                if(day_event){
                    // if event start is not today, set time to 0, which is midnight
                    if(this.props.day.getDate() > day_event.start_datetime.getDate()){
                        event_start = 0;
                    } else {
                        var event_start = day_event.start_datetime.getHours()*(60*pixels_per_minute)+ day_event.start_datetime.getMinutes();
                    }
                    // if event end is not today, set it to max - start time
                    if(this.props.day.getDate() < day_event.end_datetime.getDate()){
                        var duration = 960 - event_start;
                    } else {
                        var duration = day_event.end_datetime.getHours()*(60*pixels_per_minute)+ day_event.end_datetime.getMinutes()- event_start;
                    }                

                    events_jsx.push(
                        <div className="day_event" style={{top:event_start, height:duration}} data-id={"day_event_"+day_event.id} >
                            {day_event.title}
                        </div>
                    )
                }
            }
        }
        return events_jsx;
    }
    //$(...).scrollTo(document.getElementById('twenty'), 800);
}
const pixels_per_minute = 0.7;

export default CalendarDay;