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

  complete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} complete={this.complete} />
      </div>
    );
  }
}

export default App;
