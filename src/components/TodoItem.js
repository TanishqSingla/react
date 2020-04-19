import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.props.complete} />
        <p style={this.getStyle()}>{this.props.todo.title}</p>
      </div>
    );
  }
}

TodoItem.propType = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
