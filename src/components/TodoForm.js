import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  render() {
    return (
      <div className="todo-form">
        <input value={this.props.value} 
        onChange={this.props.onChange} 
        onKeyPress={this.props.onKeyPress}/>
        <div className="create-button" onClick={this.props.onCreate}>
          Create
        </div>
      </div>
    );
  }
}

export default TodoForm;