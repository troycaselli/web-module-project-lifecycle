import React from 'react';
import {screen, render} from '@testing-library/react';
import TodoList from './TodoList';

const todos = [
    {
        completed: false,
        id: 1,
        name: 'laundry'
    },
    {
        completed: false,
        id: 2,
        name: 'dishes'
    }
]

test('renders without errors' , () => {
    render(<TodoList todos={[]} />);
})

test('TodoList shows data when expected' , () => {
    const {rerender} = render(<TodoList todos={[]} />);
    let todosObject = screen.queryAllByTestId('todo-id');
    expect(todosObject).toHaveLength(0);

    rerender(<TodoList todos={todos} />);
    todosObject = screen.queryAllByTestId('todo-id');
    expect(todosObject).toHaveLength(2);
})