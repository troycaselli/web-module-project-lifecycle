import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todos.map((todo, idx) => {
          return <Todo
            todo={todo} 
            key={idx} 
            toggleStrikethrough={this.props.toggleStrikethrough}/>
        })}
      </div>
    )
  }
}
