import React from 'react'

export default class Form extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={evt => this.props.submitHandler(evt)}>
          <input
            type='text' 
            placeholder='new todo' 
            value={this.props.inputValue}
            onChange={evt => this.props.todoOnChange(evt)} />
          <button>Add Todo</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed Todos</button>
      </div>
    )
  }
}
