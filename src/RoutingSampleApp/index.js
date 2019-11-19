import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import StudentsListPage from './StudentsListPage';
import OneStudentPage from './OneStudentPage';
import './index.css';

const RoutingSampleApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/students" exact component={StudentsListPage} />
        <Route path="/students/:studentId" exact component={OneStudentPage} />
        <Redirect from="/" exact to="/students" />

        <Route
          path="/not-found"
          exact
          render={() => (
            <h1 className="not-found">
              404 Not Found{' '}
              <span role="img" aria-label="emoji">
                😔
              </span>
            </h1>
          )}
        />
        <Redirect path="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutingSampleApp;
