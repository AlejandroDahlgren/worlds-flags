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
    <rect x="0" y="0" rx="10" ry="10" width="140" height="30" />
    {/**bigbox */}
    <rect x="0" y="120" rx="10" ry="10" width="570" height="288" />
    {/**texttitle */}
    <rect x="630" y="130" rx="5" ry="5" width="300" height="40" />
    {/**textbox */}
    <rect x="630" y="210" rx="5" ry="5" width="150" height="10" />
    <rect x="630" y="240" rx="5" ry="5" width="150" height="10" />
    <rect x="630" y="270" rx="5" ry="5" width="150" height="10" />
    <rect x="630" y="300" rx="5" ry="5" width="150" height="10" />
    {/**sidan */}
    <rect x="915" y="210" rx="5" ry="5" width="150" height="10" />
    <rect x="915" y="240" rx="5" ry="5" width="150" height="10" />
    <rect x="915" y="270" rx="5" ry="5" width="150" height="10" />
    {/**border*/}
    <rect x="630" y="370" rx="5" ry="5" width="150" height="10" />
    <rect x="890" y="368" rx="5" ry="5" width="150" height="20" />
    </ContentLoader>
  </div>
);

export default CountryDetailsLoader;
