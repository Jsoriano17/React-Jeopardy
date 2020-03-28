import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Home from './components/Home'
import './App.css';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
