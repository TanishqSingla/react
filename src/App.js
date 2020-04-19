import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        completed: false,
      },
      {
        id: 3,
        title: "Task 3",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
