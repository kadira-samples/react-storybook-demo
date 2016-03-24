import { configure } from 'react-storybook';
import 'todomvc-app-css/index.css'

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
