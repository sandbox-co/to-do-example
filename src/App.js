import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";

import Task from "./components/Task";

// // Initialize Firebase
// // TODO: Replace with your project's customized code snippet
// var config = {
//   apiKey: "<API_KEY>",
//   authDomain: "<PROJECT_ID>.firebaseapp.com",
//   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//   storageBucket: "<BUCKET>.appspot.com"
// };
// firebase.initializeApp(config);
// //

// let db = firebase.firestore();

class App extends Component {
  state = {
    todos: [],
    count: 0
  };

  // componentDidMount() {
  //   db.collection("tasks").onSnapshot(snapshot => {
  //     snapshot.docChanges().forEach(change => {
  //       if (change.type === "added") {
  //         // a task has been added
  //         const todos = this.state.todos;
  //         const newTask = change.doc.data();
  //         this.setState({ todos: [...this.state.todos, newTask] });
  //       }

  //       if (change.type === "modified") {
  //         // a task has been modified
  //       }

  //       if (change.type === "removed") {
  //         // a task has been removed
  //       }
  //     });
  //   });
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
