import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoingitem extends Component {

    getStyle = () => {
        return {
            background: '#F0F8FF',
            borderBottom: '2px #ccc dotted',
            padding: '8px',
            textDecoration: this.props.todos.completed ? 'line-through' : 'none'
        }
    }
     /*checkComplete = (e) =>{
         console.log(this.props)
            
            
        
    }*/

    render() {
      
       const {id, Reminders} = this.props.todos;
        return (
            <div style ={this.getStyle()}>
              <p>
                  <input type="checkbox" onChange={this.props.checkComplete.bind(this, id)}
               />{' '}   
               { Reminders }
               <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}> d </button>
               </p>
            </div>
        )
    }
}
    // PropTypes are properties needed for the components 
Todoingitem.propTypes = {
    todos: PropTypes.object.isRequired,
    checkComplete: PropTypes.func.isRequired,
    delTask: PropTypes.func.isRequired
}
const btnStyle = {
    background: '#8B0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default Todoingitem
