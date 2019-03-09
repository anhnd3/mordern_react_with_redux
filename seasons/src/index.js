import React, { Component } from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./season_display";
import Spinner from "./spinner";

class App extends Component {
  state = {
    lat: undefined,
    long: undefined,
    errMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      error => {
        this.setState({ errMessage: error.message });
      }
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
