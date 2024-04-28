import React from 'react';
import './Card.css';

export default function ActionAreaCard({
  flagPng,
  countryName,
  population,
  region,
  capital,
}) {
  if (capital) {
    capital = capital.join(' ');
  }

  return (
    <div className="card">
      <div className="card-action-area">
        <img src={flagPng} alt="" className="card-media" />
        <div className="card-content">
          <h2>{countryName}</h2>
          <p>
            <strong>Population:</strong>{' '}
            <span>
              {population.toLocaleString('en-US', {
                style: 'decimal',
                useGrouping: true,
              })}
            </span>
          </p>
          <p>
            <strong>Region:</strong> <span>{region}</span>
          </p>
          <p>
            <strong>Capital:</strong> <span>{capital || 'N/A'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}