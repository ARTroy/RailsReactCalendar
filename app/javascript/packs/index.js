// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../components/Calendar';

window.onload = function() {
    var calendars = document.getElementsByClassName('React_Calendar');
    for (var i=0; i< calendars.length; i++) {
        ReactDOM.render(
            <Calendar/>,calendars[i]
        )
    }
}

$(document).on('turbolinks:load', function() {
    var calendars = document.getElementsByClassName('React_Calendar');
    for (var i=0; i< calendars.length; i++) {
        ReactDOM.render(
            <Calendar/>,calendars[i]
        )
    }
})