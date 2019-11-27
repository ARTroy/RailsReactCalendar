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
                let day_event = this.props.day_events[i]; 
                if(day_event){
                    //To Do organize events by time 
                    //duration = 
                    //style={{position: 'relative',top: }}
                    events_jsx.push(
                        <div className="day_event" id={"day_event_"+day_event.id} >
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
//console.log(this.props.day_events)

export default CalendarDay;