
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addItem, removeItem} from "./../actions/Todo";


class App extends Component {

    addItem = () => {
        this.props.dispatch(addItem({
            id: Math.random().toString(36).substring(7),
            title: this.todoInput.value
        }))
        this.todoInput.value = "";
    }

    removeItem = (id) => {
        this.props.dispatch(removeItem({id}));
    }

    initRef = (input) => {
        this.todoInput = input;
    }

    render() {
        let {todo} = this.props;
        return(
            <div>
                <header>Todo list</header>
                <input type="text" ref={this.initRef} placeholder="Write a task" />
                <button onClick={this.addItem}>Add</button>
                <section>
                    <ul>
                        {
                            todo.map((task, index) => 
                                <li key={index}>{task.title}
                                    <button onClick={this.removeItem.bind(this, task.id)}>
                                        Del
                                    </button>
                                </li>
                            )
                    }                        
                    </ul>
                </section>
            </div>

        );
    }
}

App.propTypes = {
    todo: PropTypes.array,
    dispatch: PropTypes.func
}

export default connect(({todo}) => todo)(App);