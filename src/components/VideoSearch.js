import React, { useState } from 'react';
import { VIDEO_SEARCH_URL } from 'utils/utils';

const VideoSearch = ({ setVideoList }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleSearchRequest = (event) => {
    setSearchRequest(event.target.value)
  }

  const submitSearch = () => {
    fetch(VIDEO_SEARCH_URL(searchRequest))
      .then((data) => data.json())
      .then((json) => setVideoList(json.items))
  }

  return (
    <section>
      <form>
        <label htmlFor="search-input" className="search-input">
          <input type="text" id="search-input" value={searchRequest} onChange={handleSearchRequest} />
        </label>
        <button type="button" onClick={() => submitSearch()}>Search</button>
      </form>
    </section>
  )
}

export default VideoSearch;