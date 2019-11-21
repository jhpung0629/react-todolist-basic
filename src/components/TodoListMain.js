import React, {Component} from 'react';
import './TodoListMain.css';

class TodoListMain extends Component{
  render() {
    return (
      <main className="todo-list">
        <div className="title">
          Today TodoList
        </div>
        <section className="form-wrapper">
          {this.props.form}
        </section>
        <section className="todos-wrapper">
          {this.props.children}
        </section>
      </main>
    );
  }
}

export default TodoListMain;