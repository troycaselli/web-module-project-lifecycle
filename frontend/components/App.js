import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: ''
    }
  }

  setErrorMessage = err => this.setState({...this.state, error: err.response.data.message})

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data, error: ''})
        console.log(this.state.todos);
      })
      .catch(this.setErrorMessage);
  }

  componentDidMount() {
    this.fetchAllTodos();
  }

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      completed: false
    }
    axios.post(URL, newTodo)
      .then(res => {
        // this.setState({...this.state, todos: [...this.state.todos, res.data.data], error: ''})
        // OR
        this.setState({...this.state, todos: this.state.todos.concat(res.data.data), error: ''})
      })
      .catch(this.setErrorMessage);
  }

  toggleStrikethrough = todoId => {
    axios.patch(`${URL}/${todoId}`)
      .then(res => {
        this.setState({...this.state, todos: this.state.todos.map(todo => {
          if(todoId !== todo.id) return todo;
          return res.data.data;
        })})
      })
    console.log(this.state.todos);
  }

  // BUG: this doesn't set the state with the filtered objects::: use axios?
  clearCompleted = () => {
    this.setState({todos: this.state.todos.filter(todo => todo.completed === false)})
    console.log('new state', this.state.todos);
  }

  render() {
    return (
      <div>
        <p id='error'>{this.state.error ? `Error: ${this.state.error}` : ''}</p>
        <TodoList todos={this.state.todos} toggleStrikethrough={this.toggleStrikethrough}/>
        <Form 
          addTodo={this.addTodo} 
          clearCompleted={this.clearCompleted} />
      </div>
    )
  }
}
