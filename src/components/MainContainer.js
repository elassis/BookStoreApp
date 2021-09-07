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
        <form>
          <input placeholder="Book Title" />
          <input placeholder="Book Author" />
          <button type="button">Add Book</button>
        </form>
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);
export default MainContainer;
