// no need for state
// so we make it a plain functional component

// In a functional component the props object is an argument.
// If REFACTORED to a  CLASS BASED component:
// In a class based component, props are available anywhere - in any method we
// define - as this.prop:
//                         props.videos.length > this.props.videos.length

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
