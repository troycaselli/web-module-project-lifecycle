import React from 'react'

export default class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      inputValue: ''
    }
  }

  submitHandler = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({...this.state, inputValue: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={evt => this.submitHandler(evt)}>
          <input
            type='text' 
            placeholder='new todo' 
            value={this.state.inputValue}
            onChange={evt => this.setState({...this.state, inputValue: evt.target.value})} />
          <button>Add Todo</button>
        </form>
        <button onClick={() => this.props.clearCompleted()}>Clear Completed Todos</button>
      </div>
    )
  }
}
