import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from '../redux/books/Books';
import Categories from '../redux/categories/Categories';
import Navbar from './Navbar';

const MainContainer = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);
export default MainContainer;
