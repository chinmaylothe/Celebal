import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import BikeAdmin from './components/bike-admin/BikeAdmin';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import Login from './components/login/Login'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Layout />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bikes" component={BikeAdmin} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
