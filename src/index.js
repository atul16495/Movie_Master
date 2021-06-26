import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js'
// import Controller from './screens/Controller.js';


// ReactDOM.render(<Controller />, document.getElementById('root'));

ReactDOM.render(
     
     <App />,
    
     document.getElementById('root'));

registerServiceWorker();


                      