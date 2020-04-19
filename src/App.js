import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import About from "./components/About";

//adding a router
import { BrowserRouter as Router, Route } from "react-router-dom";

//For adding random ids
const uuid = require("uuid");

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

  //delete list item
  delItem = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  //add list item
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <div className="App">
                <AddTodo addTodo={this.addTodo} />
                <Todo
                  todos={this.state.todos}
                  complete={this.complete}
                  delItem={this.delItem}
                />
              </div>
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
