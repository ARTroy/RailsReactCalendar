import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Calendar from './Calendar';
import { strict } from 'assert';

//import 
//import { BrowserRouter as Router, Route } from 'react-router-dom'
//import './App.css';

class App extends React.Component {

    state = { 
        recurring_events:{  }, 
        events:[ ],
        current_week_start: new Date("2019-11-25T000:00:00"),
    }

    render ()
    {
        return (
            <Router>
                <Route exact path="/" render={props => (
                    <Calendar />                        
                )} />
                <Route path="/menu" render={props => (
                    <div><Link to='/'>Back</Link></div>
                )} />
            </Router>       
        );
    }
}
export default App;
