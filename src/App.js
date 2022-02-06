import React, { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import requests from "./helpers/requests";
import movieTrailer from "movie-trailer";
import Row from "./components/Row";
import TrailerPopup from "./components/TrailerPopup";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [title, setTitle] = useState("");
  const showTrailer = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setTitle("");
    } else {
      try {
        const url = await movieTrailer(
          movie?.name || movie?.title || movie?.original_name || ""
        );
        const urlParams = new URL(url).searchParams;
        if (urlParams.get("v") != null) {
          setTrailerUrl(urlParams.get("v"));
          setTitle(movie?.name || movie?.title || movie?.original_name);
        } else {
          setTrailerUrl("error");
        }
      } catch (error) {
        setTrailerUrl("error");
      }
    }
  };
  return (
    <div className="app">
      <Navbar />
      <LazyLoadComponent>
        <Banner showTrailer={showTrailer} />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Netflix Originals"
          url={requests.fetchNetflixOriginals}
          isLarge={true}
          showTrailer={showTrailer}
          isFirstRow={true}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Trending 🔥"
          url={requests.fetchTrending}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Upcoming 🚀"
          url={requests.fetchTopUpcomingMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Most Popular 💙"
          url={requests.fetchPopularMovies}
          showTrailer={showTrailer}
          isLarge={true}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Top Rated ⭐"
          url={requests.fetchTopRated}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Action Movies"
          url={requests.fetchActionMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Comedy Movies"
          url={requests.fetchComedyMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Romance Movies"
          url={requests.fetchRomanceMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      {/* <LazyLoadComponent>
      <Row
        title="Mystery Movies"
        url={requests.fetchMysteryMovies}
        showTrailer={showTrailer}
      />
      </LazyLoadComponent> */}
      <LazyLoadComponent>
        <Row
          title="Triller Movies"
          url={requests.fetchThrillerMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Row
          title="Adventure Movies"
          url={requests.fetchAdventureMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent>
      {/*  <LazyLoadComponent>
        <Row
          title="Science Fiction"
          url={requests.fetchScienceFictionMovies}
          showTrailer={showTrailer}
        />
      </LazyLoadComponent> */}
      {/* <LazyLoadComponent>
      <Row
        title="Horror Movies"
        url={requests.fetchHorrorMovies}
        showTrailer={showTrailer}
      />
      </LazyLoadComponent>
      <LazyLoadComponent>
      <Row
        title="Animation Movies"
        url={requests.fetchAnimationMovies}
        showTrailer={showTrailer}
        />
        </LazyLoadComponent>
        <LazyLoadComponent>
          
      <Row
        title="Fantasy"
        url={requests.fetchFantasyMovies}
        showTrailer={showTrailer}
      />
      </LazyLoadComponent>
      <LazyLoadComponent>
      <Row
        title="History Movies"
        url={requests.fetchHistoryMovies}
        showTrailer={showTrailer}
      />
    </LazyLoadComponent> */}
      {trailerUrl && <TrailerPopup trailerUrl={trailerUrl} title={title} />}
      <Footer />
    </div>
  );
}

export default App;
