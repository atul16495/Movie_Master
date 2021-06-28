import React from 'react';
import BookShow from './screens/bookshow/BookShow.js'
import Home from './screens/home/Home.js'
import Details from './screens/details/Details.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Details" render={(props) => <Details {...props} />} />
        <Route exact path="/movie/" component={Details} />
        <Route exact path="/BookShow" render={(props) => <BookShow {...props} />} />

      </Switch>
    </Router>
  )
}

export default App;
