/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { LIST_URL } from 'utils/utils';

const VideoList = () => {
  const [videoList, setVideoList] = useState('')

  useEffect(() => {
    // fetch(process.env.LIST_URL)
    fetch(LIST_URL)
      .then((data) => data.json())
      .then((json) => {
        setVideoList(json.items)
        console.log(videoList)
      })
  }, [])

  if (videoList === '') {
    return (
      <>
      </>
    )
  }
  return (
    <div className="video-list">
      {videoList.map((listItem) => {
        return (
          <a key={listItem.assetId} to="webb.com">
            {listItem.localized.map((singleTitle) => {
              return (
                <div className="item-box">
                  <img src={singleTitle.images[2].url} alt="tumbnail" />
                  <p>{singleTitle.title}</p>
                </div>
              )
            })}
          </a>
        )
      })}
    </div>
  )
}

export default VideoList;
