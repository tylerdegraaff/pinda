import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const Desktop = lazy(() => import('modules/Desktop'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={Desktop} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
