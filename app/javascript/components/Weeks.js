import React from 'react';
//import ToDoItem from './ToDoItem';
//import '../App.css';
import PropTypes from "prop-types";

//yarn start

class Weeks extends React.Component {
  
  render ()
  {
    //return this.props.weeks.map( (item) => 
    //    
    //)
  }
}

// type checked
Weeks.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Weeks;

//return this.props.todos.map( (item) => 
//  <ToDoItem key={ item.id } todo={ item } 
//    markComplete={this.props.markComplete} 
//    deleteTodo={this.props.deleteTodo} 
//  />
//);