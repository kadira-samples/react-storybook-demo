import React from 'react';
import Footer from '../Footer';
import { storiesOf, action } from '@kadira/storybook';
import {
  SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE
} from '../../constants/TodoFilters'

storiesOf('Footer', module)
  .add('default view', () => (
    <div className="todoapp">
      <Footer
        completedCount={10}
        activeCount={4}
        filter={SHOW_ALL}
        onClearCompleted={action('onClearCompleted')}
        onShow={action('onShow')} />
    </div>
  ))
  .add('show completed', () => (
    <div className="todoapp">
      <Footer
        completedCount={10}
        activeCount={4}
        filter={SHOW_COMPLETED}
        onClearCompleted={action('onClearCompleted')}
        onShow={action('onShow')} />
    </div>
  ))
  .add('show active', () => (
    <div className="todoapp">
      <Footer
        completedCount={10}
        activeCount={4}
        filter={SHOW_ACTIVE}
        onClearCompleted={action('onClearCompleted')}
        onShow={action('onShow')} />
    </div>
  ));
