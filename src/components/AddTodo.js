import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  change = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  submit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          name="title"
          placeholder="Add todo"
          value={this.state.title}
          onChange={this.change}
        />
        <input type="submit" value="Add" className="btn" />
      </form>
    );
  }
}

export default AddTodo;
