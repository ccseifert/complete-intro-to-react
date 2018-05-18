import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            placeholder="Search"
          />
        </header>
        <div>{preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}</div>
      </div>
    );
  }
}

export default Search;
