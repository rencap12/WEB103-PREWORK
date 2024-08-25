import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Card = ({ creator }) => {
  return (
    <div className="card">
      <img src={creator.imageURL} alt={creator.name} className="card-image" />
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Page</a>
      <Link to={`/creator/${creator.id}`} className="card-link">View Details</Link>
      <Link to={`/edit/${creator.id}`} className="card-link edit-link">Edit</Link>
    </div>
  );
};

export default Card;
