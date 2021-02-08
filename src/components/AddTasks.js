import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTasks extends Component {
    state = {
        Reminders: ''
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTasks(this.state.Reminders);
        this.setState({ Reminders: ''});
    }

    render() {
        return (
           <form onSubmit={this.onSubmit} style = {{display: 'flex'}}>
               <input
               type ="text"
               name ="Reminders"
               style = {{flex : '20', padding:'7px'}}
               placeholder="Add tasks here ..."
               value={this.state.Reminders}
               onChange={this.onChange}
               />
               <input
               type ="submit"
               value ="Submit"
               className ="btn"
               style = {{flex: '0.5'}}
               />
           </form>
        )
    }
}
AddTasks.propTypes = {
    AddTasks: PropTypes.func.isRequired
    
}
export default AddTasks;
