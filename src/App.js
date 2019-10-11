import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './pages/Home'
import mission from './pages/mission'
import resource from './pages/resource'
import software from './pages/software'


function App() {
  return (


    <Router>
      <Home />
      <Switch>

        <Route path='/mission' component={mission} />
        <Route path='/resource' component={resource} />
        <Route path='/software' component={software} />
      </Switch>
    </Router>



  )
}

export default App;
