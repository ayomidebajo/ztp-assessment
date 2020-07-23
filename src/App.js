import React from "react";
import { useState, useEffect } from "react";
import "./styles/layout.scss";
import Index from "./components/Index";
import axios from "axios";
import SideNavbar from "./components/side--navbar/SideNavbar";
import AsideInput from "./components/side--navbar/AsideInput";

const App = () => {
  const [movie, setMovie] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(
    (text) => {
      searchMovie(text);
    },
    [movie]
  );

  useEffect(() => {
    searchMovie("game of thrones");
  }, []);

  const searchMovie = async (text) => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows/?q=${text}&embed=episodes`
    );

    // console.log("search", res.data);
    setQuery(text);
    setMovie(data);

    const {
      _embedded: { episodes },
    } = data;
    const seasons = [];

    await episodes.forEach((episode) => {
      if (!seasons.includes(episode.season)) seasons.push(episode.season);
    });

    console.log("seasons", seasons);
    setSeasons(seasons);

    const sortedEpisodes = episodes.filter((episode) => episode.season === 1);
    console.log("season " + 1, sortedEpisodes);
    setEpisodes(sortedEpisodes);
  };

  const selectSeason = (season) => {
    const {
      _embedded: { episodes },
    } = movie;
    console.log("selectes season", season);
    console.log("selectes season: episodes", episodes);

    const sortedEpisodes = episodes.filter(
      (episode) => episode.season == season
    );
    console.log("season " + season, sortedEpisodes);
    setEpisodes(sortedEpisodes);
  };

  const sortMovies = async (sort) => {
    const sortRes = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows/?q=${query}&embed=${sort}`
    );
    setMovie(sortRes);
    console.log("sorted", sortRes);
  };

  return (
    <div className="dashboard--container">
      <div className="aside--container">
        <h2 className="heading--h2">
          <p className="logo">
            <span className="m">m</span>
            <span className="o">o</span>
            <span className="v">v</span>
            <span className="i">i</span>
            <span className="e">e</span>
            <span className="s">s</span>
          </p>
        </h2>
        <AsideInput Movies={searchMovie} />
        <SideNavbar />
      </div>
      <Index
        movies={movie}
        Movies={searchMovie}
        sortMovie={sortMovies}
        seasons={seasons}
        episodes={episodes}
        selectSeason={selectSeason}
      />
    </div>
  );
};

export default App;
