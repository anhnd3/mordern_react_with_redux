import axios from "axios";

const KEY = "AIzaSyAeuNqn0bfRqrzMnr2Bb6bikF3pR7me7MA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
