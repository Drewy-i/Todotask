import React, { Component } from 'react';
import Todoing from './components/Todoing';
import AddTasks from './components/AddTasks';
import Info from './components/Pages/Info';
import Header from './components/layout/Header';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';



class App extends Component {
    state = {
      todoing: [
        {
        id:uuidv4(),
        Reminders:'Pay the bills',
        completed: false
         
        },

        {  
          id:uuidv4(),
          Reminders:'Feed the cats',
          completed: true
        

        },

        {  
          
          id:uuidv4(),
          Reminders:'Exercise with barbel',
          completed: true
          
  
        },

        {  
          id:uuidv4(),
          Reminders:'Check sisters homework/assignments',
          completed: true
        

        },
        {
          id:uuidv4(),
          Reminders: 'Clean the garden',
          completed: false

        }

  


      
        
      ]
  }

     //ComponentDidMount is a method which runs after the component mounts.
     //The comment below is for fetching from the site, in fact making request to the Jason Placeholder
     /*componentDidMount() {
       axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
       
        
        .then( res => this.setState({ todoing: res.data }))
       }*/
     
      checkComplete = (id) =>{
            this.setState({ todoing: this.state.todoing.map(todos => {
              return todos.id === id?todos :{...todos,completed:!todos.completed
              };
              
            }) });
          }
      //Adding Tasks
      //And below that, the code which commented is the Add request to the server using fetch from the site
        addTasks =(Reminders) =>{
          const newTask = {
            id: uuidv4(),
            Reminders,
            completed: false
          }
          /*axios.post('https://jsonplaceholder.typicode.com/todos',{
            Reminders,
            completed:false
          }) 
          .then(res =>{res.data.id= uuidv4();
            this.setState({ todoing: [...this.state.todoing, res.data] });
          });*/ 
         this.setState({todoing:[...this.state.todoing, newTask] });
        }
        //Deleting tasks
        //And below that, the code which commented is the delete request to the server using fetch from the site
          delTask = (id) => {
            /*axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res=>this.setState({todoing: [...this.state.todoing.filter(todos => todos.id
              !== id)] }));
              */
            this.setState({todoing: [...this.state.todoing.filter(todos => todos.id
              !== id)] });

              
          }

        render() {
      
    return (
      <Router>
        <div className="App">
          <div className ="container">
            <Header />
            <Route exact path ="/" render={props => (
            <React.Fragment>
              <AddTasks addTasks = {this.addTasks} />
              <Todoing todoing={this.state.todoing} checkComplete = {this.checkComplete} 
              delTask = {this.delTask}    />

            </React.Fragment>
          )} />
          <Route path ="/info" component={Info} />
          </div>
        </div>
      </Router>
    );
            
  }
}


export default App;
