import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todo extends Component {
  render() {
    //This will render the declared jsx to each of the mapped items
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        complete={this.props.complete}
        delItem={this.props.delItem}
      />
    ));
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todo;
