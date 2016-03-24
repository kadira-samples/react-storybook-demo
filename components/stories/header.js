import React from 'react';
import Header from '../header';
import { storiesOf, action } from 'react-storybook';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <div className="todoapp">
        <Header addTodo={action('Add Todo')}/>
      </div>
    );
  });
