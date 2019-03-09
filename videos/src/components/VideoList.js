import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    const { videos } = this.props;

    const renderedList = videos.map(video => {
      let key;
      if (video.id.videoId) {
        key = video.id.videoId;
      } else {
        key = Math.random();
      }
      return (
        <VideoItem
          key={key}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}
