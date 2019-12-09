import React from 'react';

class CalendarDay extends React.Component {
    state = {
        modal_content: ""
    }

    constructor(props) {
        super(props);
        this.foundation_modal = React.createRef();
        this.show_foundation_modal = this.show_foundation_modal.bind(this);
        this.close_foundation_modal = this.close_foundation_modal.bind(this);
    }

    render ()
    {
        return (
            <React.Fragment> 
            <div className="cell calendar_column" id={"day_"+this.props.day.getDate()}>
                {this.events()}      
            </div>
            <div ref={this.foundation_modal} id={"modal_day_"+this.props.day.id} className="reveal-modal" 
            data-reveal aria-hidden="true" role="dialog" data-animation-in="fade-in fast" data-animation-out="fade-out fast">
                { this.state.modal_content }
                <a className="close-reveal-modal" aria-label="Close" onClick={ this.close_foundation_modal }>&#215;</a>
            </div>
            </React.Fragment>   
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
                        var event_start = 0;
                    } else {
                        var event_start = day_event.start_datetime.getHours()*(60*pixels_per_minute)+ day_event.start_datetime.getMinutes();
                    }
                    // if event end is not today, set it to max - start time
                    if(this.props.day.getDate() < day_event.end_datetime.getDate()){
                        var duration = 936 - event_start; // 936 = 24 * 60 * pixels_per_minute, as 24 hours is max
                    } else {
                        var duration = day_event.end_datetime.getHours()*(60*pixels_per_minute)+ day_event.end_datetime.getMinutes()- event_start;
                    }                

                    events_jsx.push(
                        <div className="day_event" style={{top:event_start, height:duration}} data-id={"day_event_"+day_event.id} >
                            <span onClick={() => this.show_foundation_modal(day_event) }> {day_event.title}</span>
                        </div>
                    );
                }
            }   
        }
        return events_jsx;
    }

    show_foundation_modal(day_event) {
        this.setState({ modal_content: 
            <div>
                <h2 id="modalTitle">{ day_event.title }</h2>
                <div className="grid-x grid-padding-x">
                        <div className="cell small-12">
                            <label>title</label> <input name="calendar_event[title]" type="text" value={ day_event.title }/>
                        </div>
                        <div className="cell small-12">
                            <label>description</label> <input name="calendar_event[description]" type="text" value={ day_event.description } /> 
                        </div>
                        <div className="cell small-12">
                            <label>start datetime</label>
                        </div>
                        <div className="cell small-6">
                            <input name="calendar_event[start_date]" type="date" style={{display: 'inline-block'}}
                            value={ day_event.start_datetime.getFullYear() + "-" + (day_event.start_datetime.getMonth() + 1).toString().padStart(2, '0') + "-" + day_event.start_datetime.getDate().toString().padStart(2, '0') }/>
                        </div>
                        <div className="cell small-6">
                            <input name="calendar_event[start_time]" type="time" style={{display: 'inline-block'}}
                            value={ day_event.start_datetime.getHours().toString().padStart(2, '0') + ":" + day_event.start_datetime.getMinutes().toString().padStart(2, '0') }/>
                        </div>
                        <div className="cell small-12">
                            <label>end datetime</label>
                        </div> 
                        <div className="cell small-6">
                            <input name="calendar_event[end_date]" type="date" style={{display: 'inline-block'}} 
                            value={ day_event.end_datetime.getFullYear() + "-" + (day_event.end_datetime.getMonth() + 1).toString().padStart(2, '0') + "-" + day_event.end_datetime.getDate().toString().padStart(2, '0') }/>
                        </div>
                        <div className="cell small-6">
                            <input name="calendar_event[end_time]" type="time" style={{display: 'inline-block'}}
                            value={ day_event.end_datetime.getHours().toString().padStart(2, '0') + ":" + day_event.end_datetime.getMinutes().toString().padStart(2, '0') }/>
                        </div>
                </div>

            </div>
            
        });
        var reveal = this.foundation_modal.current;
        $(reveal).foundation('open');
        event.preventDefault();
    }

    close_foundation_modal() {      
        var reveal = this.foundation_modal.current;
        $(reveal).foundation('close');
        event.preventDefault();
    }

    //edit_on_change = (e) => this.setState({ [e.target.name]:e.target.value }); onChange={edit_on_change} 

}
const pixels_per_minute = 0.65;

export default CalendarDay;