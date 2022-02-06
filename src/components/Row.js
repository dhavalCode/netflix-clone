import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "../helpers/axios";
import "../components/css/Row.css";

function Row({ title, url, isLarge, showTrailer, isFirstRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setMovies(res.data.results);
    };
    fetchData();
  }, [url]);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container-fluid row_wrapper">
      <h1 className={isFirstRow ? "padding_row" : ""}>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <LazyLoadImage
            placeholder={
              <div className="loading_spinner">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            onClick={() => showTrailer(movie)}
            key={movie.id}
            src={`${BASE_URL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLarge ? "row_posterLarger" : ""}`}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
