import { useLoaderData, Link } from "react-router-dom";


export default function Countries() {
    const flags = useLoaderData()
    console.log({flags});

    return (
        <div className="countries">
            {flags.map((flag) => {
                const flagImageUrl = `https://restcountries.com/data/${flag.name.common.toLowerCase().replace(/\s/g, '-')}.svg`
                console.log("flag Image URL", flagImageUrl);
            
                return (    
                    <Link className="country__links" to={flag.name.toString()} key={flag.name}>
                        <img src={flagImageUrl} alt="" />
                        <h3 className="countryName">{flag.name.common}</h3>
                        <p>Population: {flag.population}</p>
                        <p>Region: {flag.continents}</p>
                        <p>Capital: {flag.capital} </p>
                    </Link>
                )
            })}
        </div>
    )
}
//Data loader
export const countryDetailsLoader = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    if (!res.ok) {
        throw Error (`Error loading countries.`)
    }
    return res.json()
}