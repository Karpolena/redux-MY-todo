
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {addTodo, removeTodo} from "./../actions/Todo";


class App extends Component {
    addTodo() {
console.log(this.todoInput.value);
this.props.onAddTodo(this.todoInput.value);
this.todoInput.value = '';
    }
    render() {
        console.log(this.props.testStore);
        return(
            <div>
                <header>Todo list</header>
                <input type="text" ref={(input) => this.todoInput = input} placeholder="Write a task" />
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <section>
                    <ul>
                        {this.props.testStore.map((task, index) => 
                        <li key={index}>{task.name}
                        <button>Del</button>
                        </li>)}                        
                    </ul>
                </section>
            </div>

        );
    }
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTodo: (name) => dispatch({ type: 'ADD_TODO', payload: {name} })  
    })

)(App);