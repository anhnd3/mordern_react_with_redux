import React, { Component } from "react";
import { connect } from "react-redux";

export class SongDetail extends Component {
  render() {
    const { song } = this.props;
    if (!song) {
      return <div>Select a song</div>;
    }
    return (
      <div>
        <h3>Detail for:</h3>
        <p>
          Title: {song.title}
          Duration: {song.duration}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
