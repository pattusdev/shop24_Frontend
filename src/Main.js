import React from 'react';
import { Route } from 'react-router-dom';
import DrinkDetailsPage from './DrinkDetailsPage';

function Main() {
  return (
    <Route path="/drink-details" component={DrinkDetailsPage} />
  );
}

export default Main;
