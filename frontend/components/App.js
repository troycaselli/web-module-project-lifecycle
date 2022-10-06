import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
        console.log(this.state.todos);
      })
      .catch(err => console.error(err));
  }

  addTodo = todoName => {
    const newTodo = {
      // id: Date.now(),
      name: todoName,
      completed: false
    }
    axios.post(URL, newTodo)
      .then(res => {
        this.setState({...this.state, todos: [...this.state.todos, res.data.data]})
      })
      .catch(err => console.error(err));
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
        <TodoList todos={this.state.todos} toggleStrikethrough={this.toggleStrikethrough}/>
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
    )
  }
}
