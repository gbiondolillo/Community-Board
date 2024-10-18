// src/TVShowCard.jsx
import React from 'react';
import "./TVShowCard.css";

const TVShowCard = (props) => {
  const { title, genre, rating, description, imageUrl, url} = props;

  const handleButtonClick = () => {
    window.location.href = url;
    console.log(`Button clicked for ${title}`);
  };

  return (
    <div className="tv-show-card">
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <p>{description}</p>
      <div>{imageUrl && <img src={import(`../images/${imageUrl}`).then(module => module.default)} alt="Button Image" />}
      </div>
      <button onClick={handleButtonClick}>Read More</button>
    </div>
  );
};

export default TVShowCard;
