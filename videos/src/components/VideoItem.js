import "./VideoItem.css";

import React, { Component } from "react";

export default class VideoItem extends Component {
  render() {
    const { video } = this.props;
    return (
      <div
        className="video-item item"
        onClick={() => this.props.onVideoSelect(video)}
      >
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  };
}
