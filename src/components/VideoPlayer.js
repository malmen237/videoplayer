import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { VIDEO_BASE_URL } from 'utils/utils';

const VideoPlayer = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.pause();
  //     videoRef.current.removeAttribute('scr');
  //     videoRef.current.load();
  //   }
  // }, [])

  return (
    <ReactHlsPlayer
      src={VIDEO_BASE_URL}
      autoPlay={false}
      controls
      width="100%"
      height="auto" />
    // <video
    //   width="auto"
    //   height="auto">
    //   <source
    //     src={VIDEO_BASE_URL}
    //     type="application/x-mpegURL" />
    //   <track kind="captions" />
    //     Your browser does not support the video tag
    // </video>
  )
}

export default VideoPlayer;