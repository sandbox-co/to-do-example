import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    count: 0
  };

  addToDo = () => {
    const todos = this.state.todos;
    let id = this.state.count + 1;
    let newToDo = {
      id,
      task: "I need to do this!"
    };

    this.setState({ todos: [...todos, newToDo], count: id });
  };

  removeToDo = id => {
    const todos = this.state.todos;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  };

  toggleToDo = () => {};

  render() {
    return (
      <div className="App">
        <div onClick={this.addToDo}>add todo</div>
        {this.state.todos.map(todo => (
          <div onClick={() => this.toggleToDo(todo.id)}>
            <h1>{todo.id}</h1>
            <h2>{todo.task}</h2>
            <div onClick={() => this.removeToDo(todo.id)}>remove</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
