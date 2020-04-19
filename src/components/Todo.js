import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todo extends Component {
  render() {
    //This will render the declared jsx to each of the mapped items
    return this.props.todos.map((todo) => <TodoItem todo={todo} />);
  }
}

export default Todo;
