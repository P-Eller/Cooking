import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import CheckBox from './containers/CheckBox';
//import CheckBoxBlock from './components/CheckBoxBlock';
import FilterBar from './components/FilterBar';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
