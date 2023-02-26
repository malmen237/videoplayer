import React, { useState } from 'react';
import VideoList from 'components/VideoList';
import VideoPlayer from 'components/VideoPlayer';
import styled from 'styled-components';

export const App = () => {
  const [videoId, setVideoId] = useState('');

  return (
    <OuterWrapper>
      {videoId && <VideoPlayer videoId={videoId} />} <br />
      <VideoList setVideoId={setVideoId} />
    </OuterWrapper>
  )
}

const OuterWrapper = styled.section`
  background-color: darkgrey;
  width: 100vw;
  min-height: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`
