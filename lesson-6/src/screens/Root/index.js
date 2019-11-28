import React from 'react';
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core';
import Header from './Header';
import StudentsListScreen from '../StudentsListScreen';
import StudentScreen from '../StudentScreen';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import StudentDeleteScreen from "../StudentDeleteScreen";
import NotFoundScreen from "../NotFoundScreen";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(5),
  },
}));

const Root = () => {
  const classes = useStyles();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <div className={classes.content}>
            <Switch>
              <Redirect path="/" exact to="/students" />
              <Route path="/students" exact component={StudentsListScreen} />
              <Route path="/students/create" exact component={StudentScreen} />
              <Route
                path="/students/:studentId"
                exact
                component={StudentScreen}
              />
              <Route
                  path="/students/delete/:studentId"
                  exact
                  component={StudentDeleteScreen}
              />
              <Route path="/http404" exact component={NotFoundScreen} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
};

export default Root;
