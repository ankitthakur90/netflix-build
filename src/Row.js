import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ErrorModal from "./ErrorModal";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLagerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [errorModal, setErrorModal] = useState({ isOpen: false, message: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setErrorModal({ isOpen: false, message: "" });
        })
        .catch(() => {
          setErrorModal({ isOpen: true, message: "Trailer not available." });
        });
    }
  };

  const closeErrorModal = () => {
    setErrorModal({ isOpen: false, message: "" });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          ((isLagerRow && movie.poster_path) || (!isLagerRow && movie.backdrop_path)) && (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLagerRow && "row_posterLarger"}`}
              src={`${base_url}${isLagerRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          )
        ))}
      </div>
      {errorModal.isOpen && (
        <ErrorModal message={errorModal.message} onClose={closeErrorModal} />
      )}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
