/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
/* eslint-disable react/jsx-boolean-value */
import React, { useRef, useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { VIDEO_FETCH_URL } from 'utils/utils';
import styled from 'styled-components';

const VideoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.REACT_APP_ACCESS_TOKEN
      }
    }
    fetch(VIDEO_FETCH_URL(videoId), options)
      .then((data) => data.json())
      .then((json) => {
        if (json.message === 'NOT_ENTITLED') {
          return setSelectedVideo('NOT_ENTITLED')
        }
        json.formats.map((singleStream) => {
          return singleStream.format === 'HLS' ? setSelectedVideo(singleStream.mediaLocator) : '';
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }, [videoId]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.pause();
      playerRef.current.removeAttribute('scr');
      playerRef.current.load();
    }
  });

  return (
    <ViewerWrapper>
      {selectedVideo === 'NOT_ENTITLED' ? <NoAccessText>Sorry, you don't have access to this video</NoAccessText>
       : <ReactHlsPlayer
           playerRef={playerRef}
           src={selectedVideo}
           autoPlay={true}
           muted
           controls
           width="50%"
           height="auto" />}
    </ViewerWrapper>
  )
}

export default VideoPlayer;

const ViewerWrapper = styled.section`
  padding: 5% 5% 2% 5%;
`

const NoAccessText = styled.p`
  color: red;
  font-size: 1.5em;
  background-color: lightgrey;
  padding: 12% 8%;
`