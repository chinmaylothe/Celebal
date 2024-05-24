import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Success from './Success';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
