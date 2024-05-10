import React from "react";
import ContentLoader from "react-content-loader";
import "./CountryList.css";

const CountryListLoader = () => (
  <div className="skeleton-list">
    <ContentLoader
      speed={1}
      width={1200}
      height={1000}
      viewBox="0 0 1200px 100%"
      backgroundColor="#2b3844"
      foregroundColor="#202c36"
    >
      <rect x="0" y="0" rx="5" ry="5" width="280" height="270" />
      <rect x="307" y="0" rx="5" ry="5" width="280" height="270" />
      <rect x="613" y="0" rx="5" ry="5" width="280" height="270" />
      <rect x="920" y="0" rx="5" ry="5" width="280" height="270" />
      <rect x="0" y="330" rx="5" ry="5" width="280" height="270" />
      <rect x="307" y="330" rx="5" ry="5" width="280" height="270" />
      <rect x="613" y="330" rx="5" ry="5" width="280" height="270" />
      <rect x="920" y="330" rx="5" ry="5" width="280" height="270" />
      <rect x="0" y="660" rx="5" ry="5" width="280" height="270" />
      <rect x="307" y="660" rx="5" ry="5" width="280" height="270" />
      <rect x="613" y="660" rx="5" ry="5" width="280" height="270" />
    </ContentLoader> 
   
  </div>
);

export default CountryListLoader;
