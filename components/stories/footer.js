import React from 'react';
import Footer from '../footer';
import { storiesOf, action } from 'react-storybook';
import {
  SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE
} from '../../constants/TodoFilters'

storiesOf('Footer', module)
  .add('default view', () => (
    <Footer
      completedCount={10}
      activeCount={4}
      filter={SHOW_ALL}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')} />
  ))
  .add('show completed', () => (
    <Footer
      completedCount={10}
      activeCount={4}
      filter={SHOW_COMPLETED}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')} />
  ))
  .add('show active', () => (
    <Footer
      completedCount={10}
      activeCount={4}
      filter={SHOW_ACTIVE}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')} />
  ));
