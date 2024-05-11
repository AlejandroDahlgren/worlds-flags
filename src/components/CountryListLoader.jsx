import React from "react";
import ContentLoader from "react-content-loader";
import "./CountryList.css";

const CountryListLoader = () => (
  <div className="skeleton-list">
    <ContentLoader
      speed={1}
      width={1200}
      height={1200}
      viewBox="0 0 1200 1200"
      backgroundColor="#2b3844"
      foregroundColor="#202c36"
    >
      <rect x="0" y="0"  width="280" height="134" />
      <rect x="0" y="136" rx="5" ry="5" width="280" height="134" />

      <rect x="307" y="0"  width="280" height="134" />
      <rect x="307" y="136" rx="5" ry="5" width="280" height="134" />

      <rect x="613" y="0"  width="280" height="134" />
      <rect x="613" y="136" rx="5" ry="5" width="280" height="134" />

      <rect x="920" y="0"  width="280" height="134" />
      <rect x="920" y="136" rx="5" ry="5" width="280" height="134" />

      <rect x="0" y="330"  width="280" height="134" />
      <rect x="0" y="466" rx="5" ry="5" width="280" height="134" />

      <rect x="307" y="330"  width="280" height="134" />
      <rect x="307" y="466" rx="5" ry="5" width="280" height="134" />

      <rect x="613" y="330"  width="280" height="134" />
      <rect x="613" y="466" rx="5" ry="5" width="280" height="134" />

      <rect x="920" y="330"  width="280" height="134" />
      <rect x="920" y="466" rx="5" ry="5" width="280" height="134" />

      <rect x="0" y="660"  width="280" height="134" />
      <rect x="0" y="796" rx="5" ry="5" width="280" height="134" />

      <rect x="307" y="660"  width="280" height="134" />
      <rect x="307" y="796" rx="5" ry="5" width="280" height="134" />

      <rect x="613" y="660"  width="280" height="134" />
      <rect x="613" y="796" rx="5" ry="5" width="280" height="134" />
      
    </ContentLoader> 
  </div>
);

export default CountryListLoader;
