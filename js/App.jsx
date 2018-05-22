// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Landing from "./Landing";
import Search from "./Search";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={props => <Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} />}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default App;
