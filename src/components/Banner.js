import React, { useState, useEffect } from "react";
import requests from "../helpers/requests";
import axios from "../helpers/axios";
import "./css/Banner.css";

function Banner({ showTrailer }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(requests.fetchNetflixOriginals);
        const res2 = await axios.get(requests.fetchTrending);
        const res3 = await axios.get(requests.fetchPopularMovies);

        //Make one array of 3 movie collection's res
        const data = [
          ...res.data.results,
          ...res2.data.results,
          ...res3.data.results,
        ];
        setMovie(data[Math.floor(Math.random() * data.length - 1)]);
        setInterval(() => {
          setMovie(data[Math.floor(Math.random() * data.length - 1)]);
        }, 30000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div
      className="container-fluid banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to left,rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => showTrailer(movie)}>
            Play
          </button>
          <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_des">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="banner_fade_bottom mx-n3"></div>
    </div>
  );
}

export default Banner;
