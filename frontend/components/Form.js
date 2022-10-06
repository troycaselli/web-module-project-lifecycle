import React from 'react'

export default class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      inputValue: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text' 
          placeholder='new todo' 
          value={this.state.inputValue}
          onChange={evt => this.setState({...this.state, inputValue: evt.target.value})} />
        <button>Add Todo</button>
        <br />
        <button>Clear Completed Todos</button>
      </form>
    )
  }
}
