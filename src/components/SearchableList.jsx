import { useState } from "react";
import SearchInput from "./SearchInput";
import VideoList from "./VideoList";

const SearchableList = ({ videos }) => {
  const [searchText, setSearchText] = useState("");
  // const foundVideo = filterVideo(videos, searchText);

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
      <VideoList
      videos = {videos}
      emptyHeading={`No matches for “${searchText}”`}
      />
    </>
  );
};

export default SearchableList
