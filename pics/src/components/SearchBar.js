import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              name="search"
              id=""
              autoComplete="false"
              //   onChange={this.onInputChange}
              onChange={event => this.setState({ term: event.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
