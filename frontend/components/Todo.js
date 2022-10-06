import React from 'react'

export default class Todo extends React.Component {
  render() {
    return <p 
      className='todo'
      onClick={() => this.props.toggleStrikethrough(this.props.todo.id)}>{this.props.todo.name} {this.props.todo.completed ? '*DONE*' : ''}</p>
  }
}
