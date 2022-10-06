import React from 'react'

export default class Todo extends React.Component {
  render() {
    return <p 
      className='todo'
      onClick={() => this.props.toggleCompleted(this.props.todo.id)}>{this.props.todo.name} {this.props.todo.completed ? ' ✔️' : ''}</p>
  }
}
