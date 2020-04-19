import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    console.log(this.props);
    return <h3>{this.props.todo.title}</h3>;
  }
}

export default TodoItem;
