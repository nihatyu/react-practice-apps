import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Posts */}
        {movies?.map((movie) => {
          return (
            <img
              key={movie.id}
              //isLargeRow True ise bu class i da ekle
              className={`row__poster ${isLargeRow && "row__posterLarge"} `}
              src={`${baseURL}${
                //isLargeRow true ise ilk path i al, değilse ikinci path i // ikinci yatay dikdörtgen çıktı veriyor
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
