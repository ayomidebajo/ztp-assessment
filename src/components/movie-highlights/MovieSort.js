import React, { useState, useEffect } from "react";

const MovieSort = ({
  movies,
  Movies,
  sortMovie,
  seasons,
  episodes,
  selectSeason,
}) => {
  const data = movies;

  const [sort, setSort] = useState("");
  useEffect(
    (text) => {
      sortMovie(text);
    },
    [sort]
  );

  const sortArray = (type) => {
    setSort(type);
    selectSeason(type);

    console.log("clicked!", type);
  };

  return (
    <div className="movie-sort--container">
      <select
        className="sort--options"
        onClick={(e) => sortArray(e.target.value)}
      >
        {seasons?.map((season) => (
          <option key={season} value={season}>
            Season {season}
          </option>
        ))}
      </select>
      <div className="episodes">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode">
            <div className="episode-inner">
              <div
                className="img"
                style={{ backgroundImage: `url(${episode?.image?.original})` }}
              />
              <h4>{episode?.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: episode?.summary }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSort;
