/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { LIST_URL, ACCESS_TOKEN } from 'utils/utils';
import VideoSearch from 'components/VideoSearch';
import styled from 'styled-components';

const VideoList = ({ setVideoId }) => {
  const [videoList, setVideoList] = useState('');

  useEffect(() => {
    // fetch(process.env.LIST_URL)
    if (videoList === '') {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: ACCESS_TOKEN
        }
      }
      fetch(LIST_URL, options)
        .then((data) => data.json())
        .then((json) => {
          setVideoList(json.items)
        })
    }
  }, [])

  const playVideo = (event, id) => {
    event.preventDefault();
    setVideoId('')
    setVideoId(id)
  }

  if (videoList === '') {
    return (
      <>
      </>
    )
  }
  if (videoList.length === 0) {
    return (
      <p>Sorry, no video found</p>
    )
  }
  return (
    <section>
      <VideoSearch setVideoList={setVideoList} />
      <div className="video-list">
        {videoList.map((listItem) => {
          return (
            listItem.assetId === undefined ? (
              <VideoSelector type="button" key={listItem.asset.assetId} onClick={(event) => playVideo(event, listItem.asset.assetId)}>
                <div className="item-box">
                  <Tumbnail src={listItem.asset.localized[0].images[0].url} alt="tumbnail" />
                  <p>{listItem.asset.localized[0].title}</p>
                </div>
              </VideoSelector>)
              : (
                <VideoSelector type="button" key={listItem.assetId} onClick={(event) => playVideo(event, listItem.assetId)}>
                  <div className="item-box">
                    <Tumbnail src={listItem.localized[0].images[0].url} alt="tumbnail" />
                    <p>{listItem.localized[0].title}</p>
                  </div>
                </VideoSelector>
              )
          );
        })}
      </div>
    </section>
  )
}

export default VideoList;

const Tumbnail = styled.img`
  width: 240px;
  height: 135px;
`

const VideoSelector = styled.button`
  background: transparent;
  border: none;
`