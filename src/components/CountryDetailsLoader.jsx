import React from "react";
import ContentLoader from "react-content-loader";
import "./CountryDetails.css";

const CountryDetailsLoader = () => (
  <div className="skeleton-details">
    <ContentLoader
      speed={1}
      width={1200}
      height={1200}
      viewBox="0 0 1200 1200"
      backgroundColor="#2b3844"
      foregroundColor="#202c36"
    >
      {/**backbox*/}
      <rect  x="0" y="0" rx="10" ry="10" width="80" height="30" />
      {/**bigbox */}
      <rect className="bigbox" x="0" y="115" rx="15" ry="15" width="570" height="288" />
      {/**texttitle */}
      <rect className="textbox" x="630" y="120" rx="5" ry="5" width="300" height="40" />
      {/**textbox */}
     
      <rect className="textbox" x="630" y="195" rx="5" ry="5" width="75" height="10" />
      
      <rect className="textbox" x="630" y="230" rx="5" ry="5" width="75" height="10" />
      
      <rect className="textbox" x="630" y="265" rx="5" ry="5" width="75" height="10" />
      
      <rect className="textbox" x="630" y="315" rx="5" ry="5" width="75" height="10" />
      {/**sidan */}
      
      <rect className="textbox" x="920" y="195" rx="5" ry="5" width="75" height="10" />
     
      <rect className="textbox" x="920" y="230" rx="5" ry="5" width="75" height="10" />
      
      <rect className="textbox" x="920" y="265" rx="5" ry="5" width="75" height="10" />
      {/**border*/}
      <rect x="630" y="345" rx="5" ry="5" width="70" height="40" />
      <rect x="718" y="363" rx="15" ry="15" width="150" height="25" />
    </ContentLoader>
  </div>
);

export default CountryDetailsLoader;
