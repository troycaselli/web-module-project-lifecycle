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

  render() {
    return (
      <div>
        <TodoList />
        <Form />
      </div>
    )
  }
}
