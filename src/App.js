import React from 'react';
import Header from './common/header/Header.js'
import BookShow from './screens/bookshow/BookShow.js'
import Login from './common/header/Login.js'
import Signup from './common/header/Register.js'
import Home from './screens/home/Home.js'
import Details from './screens/details/Details.js'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/Details" render={(props) => <Details {...props}/>} />
      
      </Switch>
    </Router>
  )
}

export default App;
