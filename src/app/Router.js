import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import League from './pages/League';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { AuthContext } from './helpers/withAuth';
import GlobalStyles from './styles/GlobalStyles';

function Router() {
  const { data } = useContext(AuthContext);

  return (
    <>
      <Switch>
        <Route exact path="/login">
          {data.currentUser ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/">
          {!data.currentUser ? <Redirect to="/login" /> : <Dashboard />}
        </Route>
        <Route exact path="/league">
          {!data.currentUser ? <Redirect to="/login" /> : <League />}
        </Route>
        <Route component={NotFound} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default Router;
