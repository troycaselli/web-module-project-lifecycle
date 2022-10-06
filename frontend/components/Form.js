import React from 'react'

export default class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      inputValue: ''
    }
  }

  todoOnChange = evt => {
    const {value} = evt.target;
    this.setState({...this.state, inputValue: value})
  }

  submitHandler = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({...this.state, inputValue: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text' 
            placeholder='new todo' 
            value={this.state.inputValue}
            onChange={this.todoOnChange} />
          <button>Add Todo</button>
        </form>
        <button onClick={() => this.props.clearCompleted()}>Clear Completed Todos</button>
      </div>
    )
  }
}
