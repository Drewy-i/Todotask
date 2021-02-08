import React, { Component } from 'react';
import Todoingitem from './Todoingitem';
import PropTypes from 'prop-types';


class Todoing extends Component {

  
 
  render() {
    
  
    return this.props.todoing.map((todos) => (
  <Todoingitem key= {todos.id} todos={todos} checkComplete=
  {this.props.checkComplete} delTask = {this.props.delTask} />
  ));
    
  }
}

// PropTypes are properties needed for the components 
Todoing.propTypes = {
  todoing: PropTypes.array.isRequired,
  checkComplete: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired

}
export default Todoing;
