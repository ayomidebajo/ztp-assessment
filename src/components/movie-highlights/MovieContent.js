import React from "react";

const MovieContent = ({ movies }) => {
  if (Object.keys(movies).length > 1) {
    const data = movies;
    console.log("movies!", movies);
    return (
      <div className="card-today">
        <div className="movie--container">
          <img src={data?.image.original} alt="" className="movie-image" />
          <div className="movie-info">
            <div className="inner-info">
              <p
                className="p-info"
                dangerouslySetInnerHTML={{ __html: data?.summary }}
              />
              <div className="more-info">
                <div className="rating">
                  <i className="fas fa-star"></i> {data?.rating.average}
                </div>
                <div className="date">Date released: {data?.premiered}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-today">
        <div className="movie--container">
          <img
            src="http://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg"
            alt=""
            className="movie-image"
          />
          <div className="movie-info">
            <div className="inner-info">
              <p className="p-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                laborum reiciendis voluptates aliquid odio, repudiandae possimus
                doloribus non voluptate atque repellendus recusandae blanditiis
                illo maxime. Labore ipsum culpa delectus corporis?
              </p>
              <div className="more-info">
                <div className="rating">
                  <i className="fas fa-star"></i> 8
                </div>
                <div className="date">Date released: 23-07-2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieContent;
