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
      <text x="630" y="210">
        Population:{" "}
      </text>{" "}
      <rect x="705" y="210" rx="5" ry="5" width="75" height="10" />
      <text x="630" y="240">
        Region:
      </text>{" "}
      <rect x="705" y="240" rx="5" ry="5" width="75" height="10" />
      <text x="630" y="270">
        Capital
      </text>{" "}
      <rect x="705" y="270" rx="5" ry="5" width="75" height="10" />
      <text x="630" y="300">
        Native Name:
      </text>{" "}
      <rect x="705" y="300" rx="5" ry="5" width="75" height="10" />
      {/**sidan */}
      <text x="915" y="210">
        Top Level Domain:{""}
      </text>
      <rect x="1025" y="210" rx="5" ry="5" width="75" height="10" />
      <text x="915" y="240">
        Currencies:{" "}
      </text>
      <rect x="915" y="240" rx="5" ry="5" width="75" height="10" />
      <text x="915" y="270">
        Languages:{" "}
      </text>
      <rect x="915" y="270" rx="5" ry="5" width="75" height="10" />
      {/**border*/}
      <text x="630" y="370">Border Countries</text>
      <rect x="890" y="368" rx="5" ry="5" width="150" height="20" />
    </ContentLoader>
  </div>
);

export default CountryDetailsLoader;
