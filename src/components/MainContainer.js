import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import Navbar from './Navbar';

const MainContainer = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/books">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);
export default MainContainer;
