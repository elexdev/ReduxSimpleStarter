import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // {video} -> (props) => {const video = props.video; }
                  // this works because in video_list.js
                  // "video" is set as a property of VideoListItem

  console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );

};

export default VideoListItem;
