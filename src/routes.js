import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
  App,
  Register,
  Home,
  Widgets,
  About,
  Login,
  LoginSuccess,
  Survey,
  NotFound,
  Request,
  Trans,
  Trade,
  Settled,
  RequestDetail,
  PostRequest
} from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route>

      <Route path="postRequest" component={PostRequest} />
      <Route path="register" component={Register} />
      <Route path="/" component={App}>
        { /* Home (main) route */}
        <IndexRoute component={Home} />

        { /* Routes requiring login */}
        <Route onEnter={requireLogin}>
          <Route path="loginSuccess" component={LoginSuccess} />
        </Route>

        { /* Routes */}
        <Route path="about" component={About} />
        <Route path="trade" component={Trade} />
        <Route path="trans" component={Trans} />
        <Route path="settled" component={Settled} />
        <Route path="login" component={Login} />
        <Route path="request" component={Request} />
          <Route path="request/:id" component={RequestDetail} />
        <Route path="survey" component={Survey} />
        <Route path="widgets" component={Widgets} />

        { /* Catch all route */}
        <Route path="*" component={NotFound} status={404} />
      </Route>

    </Route>
  );
};
