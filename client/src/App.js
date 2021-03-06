import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Home from './components/Home'
import CardPage from './components/CardPage'
import './App.css';

const App = () => (
  <Fragment>
    {/* <Navbar/>  */}
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
        <Route exact path='/card' component={CardPage} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
