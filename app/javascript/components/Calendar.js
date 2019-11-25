import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//import 'foundation-sites/dist/css/foundation.min.css'
import CalendarHeader from './CalendarHeader';
import { strict } from 'assert';

class Calendar extends React.Component {
    state = { 
        recurring_events:[ ], 
        events:[ ],
        current_week_start: new Date("2019-11-25T000:00:00"),
    }

    render ()
    {
        return (
            <div id="calendar" className="grid-x small-up-8 grid-padding-x">
                <CalendarHeader />
                { this.hours() }
            </div>                             
        );
    }

    hours (){
        let hour_row = []
        let hour = ""
        //let date_iterator = current_week_start;
        for (let i = 0; i < 24; i++) {
            if(i < 10) { hour = "0"+i.toString(); }
            else { hour = i.toString(); }

            //if(i > 0){  date_iterator.sethour(i); } +date_iterator.get()
            hour_row.push(
                <React.Fragment>
                <div className="cell time_cell"     id={ "time_cell_" }> {hour}:00</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(1,hour) }> 1</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(2,hour) }> 2</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(3,hour) }> 3</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(4,hour) }> 4</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(5,hour) }> 5</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(6,hour) }> 6</div>
                <div className="cell calendar_cell" id={ this.hour_day_to_date(7,hour) }> 7</div>
                </React.Fragment>
            );
        }
        return hour_row
    }

    hour_day_to_date(day, hour){
        //let newDate = new Date(current_week_start)
        
    }

}

export default Calendar;

    //constructor() {
    //    this.state = {  
    //        recurring_events:{  }, 
    //        events:[
    //            {
    //                id: 1,
    //                title: "Sleep",
    //                completed: completed,
    //                start_datetime: new Date('2019-11-26T012:00:00'),
    //                end_datetime: new Date('2019-11-26T013:00:00'),
    //                is_recurring: is_recurring
    //            }
    //        ]
    //    }
    //}
    //


//<HeaderDates /> <Weeks recurring_events={ this.state.recurring_events } weeks={ this.state.weeks } />
  
    //state = { 
    //    recurring_events:[],
    //    events: { }
    //}
    //
    //constructor() {
    //    this.state = {  
    //        recurring_events:{  }, 
    //        events:{ 
    //            '2019-11-26T000:00:00':{
    //                id: 1,
    //                title: "Sleep",
    //                completed: completed,
    //                start_datetime: new Date('2019-11-26T012:00:00'),
    //                end_datetime: new Date('2019-11-26T013:00:00'),
    //                duration_minutes: 60,
    //                start_hour: 12,
    //                week_day:"Tuesday",
    //                is_recurring: is_recurring
    //            }
    //        }
    //    }
    //}
    //
    //deleteCalendarEvent = (id) => {
    //    //this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    //}
    //
    //addCalendarEvent = (title, description, start_datetime, end_datetime, is_recurring, duration, start_hour, week_day ) => {
    //    const new_event = {
    //      id: null,
    //      title: title,
    //      description : description,
    //      completed: completed,
    //      start_datetime: start_datetime,
    //      end_datetime: end_datetime,
    //      durationMinutes: duration,
    //      start_hour: start_hour,
    //      week_day: week_day,
    //      is_recurring: is_recurring
    //    }
    //
    //    console.log(this.state);
    //    this.setState( function(prev_state){
    //        // explode and reattach state`
    //        return {
    //            ...prev_state,
    //            events:{
    //                ...prev_state.events,
    //                [start_datetime]:new_event
    //            }
    //        }
    //    });
    //}
  


//<Router>
//<div className="App">
//  <Header />
//  <Route exact path="/" render={props => (
//      <React.Fragment>
//        <AddTodo addTodo={this.addTodo} />
//        <Todos todos={ this.state.todos } 
//          markComplete={this.markComplete} 
//          deleteTodo={this.deleteTodo} 
//        />
//      </React.Fragment>
//    )} 
//  />
//  <Route path="/about" component={About} />
//</div>
//</Router>

//1:null,2:null,3:null,4:null,
//5:null,6:null,7:null,8:null,
//9:null,10:null,11:null,12:null,
//13:null,14:null,15:null,16:null,
//17:null,18:null,19:null,20:null,
//21:null,22:null,23:null,24:null,






