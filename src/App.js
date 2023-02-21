import React, { useState } from 'react';
import VideoList from 'components/VideoList';
import VideoPlayer from 'components/VideoPlayer';

export const App = () => {
  const [videoId, setVideoId] = useState(null);

  const playVideo = (event, id) => {
    event.preventDefault();
    setVideoId(id)
  }

  return (
    <div>
      {/* {videoId && <VideoPlayer videoId={videoId} />} <br /> */}
      <VideoPlayer videoId={videoId} />
      <button type="button" onClick={(event) => playVideo(event)}>Play</button>
      <VideoList />
    </div>
  )
}
