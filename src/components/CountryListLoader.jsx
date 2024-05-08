import React from "react";
import ContentLoader from "react-content-loader";

const CountryListLoader = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={270}
        viewBox="0 0 280 270"
        backgroundColor=""
        foregroundColor=""
        >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ContentLoader>
);

export default CountryListLoader;