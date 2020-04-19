import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <div>
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.complete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delItem.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }
}

TodoItem.propType = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
