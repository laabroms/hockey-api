import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './screens/home';
import TeamPage from './screens/teamPage';
import Player from './screens/player';

function App() {
  return (
  
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path={'/:id'} component={TeamPage} exact>
        </Route>
        <Route path={'/:id/:playerId'} component={Player} exact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
