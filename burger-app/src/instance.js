import axios from "axios";

export const API = axios.create({
  headers: {
    "X-RapidAPI-Key": "6626fd0b13mshdb7867bb11d577bp152b60jsn8ba527d1101b",
    "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
  },
});

export const URL = "https://burgers1.p.rapidapi.com/burgers";
