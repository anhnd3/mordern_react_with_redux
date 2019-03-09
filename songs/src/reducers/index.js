import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Macarena", duration: "2:30" },
    { title: "No Scrubs", duration: "4:05" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want This That Way", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
