import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a402046c9beff327047e649bceacf2a86c98997bcb82dedf5a96c61e104eaef5"
  }
});
