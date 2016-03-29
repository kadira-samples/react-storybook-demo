import React from 'react';
import TodoItem from '../TodoItem';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TodoItem', module)
  .add('not completed', () => {
    const todo = {
      id: 'the-id',
      text: 'Hello Todo',
      completed: false
    };

    return getItem(todo);
  })
  .add('completed', () => {
    const todo = {
      id: 'the-id',
      text: 'Hello Todo',
      completed: true
    };

    return getItem(todo);
  });


function getItem(todo) {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <TodoItem
          todo={todo}
          editTodo={action('editTodo')}
          deleteTodo={action('deleteTodo')}
          completeTodo={action('completeTodo')}/>
      </div>
    </div>
  );
}
