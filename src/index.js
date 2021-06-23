import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
// import Controller from './screens/Controller.js';
import Header from './common/header/Header.js'
// ReactDOM.render(<Controller />, document.getElementById('root'));

ReactDOM.render(<Header />,
     document.getElementById('root'));

registerServiceWorker();
