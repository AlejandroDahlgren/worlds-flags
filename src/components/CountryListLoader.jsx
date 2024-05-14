import React from "react";
import ContentLoader from "react-content-loader";
import "./CountryList.css";

const CountryListLoader = () => {
  const numSkeletons = calculateSkeletons();

  function calculateSkeletons() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1121) {
      return 16;
    } else if (screenWidth >= 1021) {
      return 12;
    } else if (screenWidth >= 900) {
      return 2;
    }else {
      return 6;
    }
  }

  return (
    <div className="skeleton-list">
      {[...Array(numSkeletons)].map((_, index) => (
        <ContentLoader
          key={index}
          speed={1}
          width={280}
          height={270}
          viewBox={`0 0 280 270`}
          backgroundColor="#2b3844"
          foregroundColor="#202c36"
        >
          <rect x="0" y="0" rx="8" ry="8" width="280" height="135" />
          <rect x="10" y="150" rx="8" ry="8" width="160" height="15" />
          <rect x="10" y="185" rx="8" ry="8" width="160" height="15" />
          <rect x="10" y="215" rx="8" ry="8" width="150" height="15" />
          <rect x="10" y="245" rx="8" ry="8" width="150" height="15" />
        </ContentLoader>
      ))}
    </div>
  );
};

export default CountryListLoader;
