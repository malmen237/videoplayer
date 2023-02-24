import React, { useState } from 'react';
import VideoList from 'components/VideoList';
import VideoPlayer from 'components/VideoPlayer';

export const App = () => {
  const [videoId, setVideoId] = useState('');

  return (
    <div>
      {videoId && <VideoPlayer videoId={videoId} />} <br />
      <VideoList setVideoId={setVideoId} />
    </div>
  )
}
