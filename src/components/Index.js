import React from "react";
import MovieContent from "./movie-highlights/MovieContent";
import MovieSort from "./movie-highlights/MovieSort";

const Index = ({
  searchMovie,
  loading,
  books,
  movies,
  Movies,
  sortMovie,
  seasons,
  episodes,
  selectSeason,
}) => {
  console.log(movies);
  return (
    <div className="container">
      <div className="highlights">
        <div className="some">
          <div className="weekly">
            <MovieContent movies={movies} />
          </div>
          <div className="today">
            <MovieSort
              movies={movies}
              Movies={Movies}
              sortMovie={sortMovie}
              seasons={seasons}
              episodes={episodes}
              selectSeason={selectSeason}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
