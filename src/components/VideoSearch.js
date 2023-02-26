import React, { useState } from 'react';
import { VIDEO_SEARCH_URL } from 'utils/utils';
import styled from 'styled-components';
import SearchIcon from './Search-Icon.png';

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
    <SearchWrapper>
      <form>
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            className="search-input"
            value={searchRequest}
            onChange={handleSearchRequest}
            placeholder="Text..." />
        </label>
        {/* Image from https://www.citypng.com/ */}
        <SearchButton type="button" onClick={() => submitSearch()}><Search src={SearchIcon} alt="looking-glass" /></SearchButton>
      </form>
    </SearchWrapper>
  )
}

export default VideoSearch;

const SearchWrapper = styled.section`
  padding: 2%;
`

const SearchButton = styled.button`
  margin: 0 1% 0 1%;
`

const Search = styled.img`
  width: 20px;
`