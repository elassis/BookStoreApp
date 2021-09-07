import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookList from './BookList';
import Categories from './Categories';
import Navbar from './Navbar';

const MainContainer = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <BookList />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);
export default MainContainer;
