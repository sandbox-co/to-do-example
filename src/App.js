import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Task from "./components/Task";

class App extends Component {
  state = {
    todos: [],
    count: 0
  };

  // componentDidMount() {

  // }

  // TODO: add text input for custom tasks
  addToDo = () => {
    const todos = this.state.todos;
    let id = this.state.count + 1;
    let newToDo = {
      id,
      completed: false,
      task: "I need to do this!"
    };

    this.setState({ todos: [...todos, newToDo], count: id });
  };

  removeToDo = id => {
    const todos = this.state.todos;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  };

  toggleToDo = id => {
    const todos = this.state.todos;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div onClick={this.addToDo}>add todo</div>
        {this.state.todos.map(({ id, completed, task }) => (
          <Task
            key={id}
            id={id}
            completed={completed}
            task={task}
            removeToDo={this.removeToDo}
            toggleToDo={this.toggleToDo}
          />
        ))}
      </div>
    );
  }
}

export default App;
