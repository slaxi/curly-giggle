import React from "react";
import { CountryCard } from "../../countries/Countries.type";

const CountriesList = ({ data }: {data: CountryCard}) => {
    const {name, flag, subregion, capital, population, languages} = data;
  return (
    <div className="country-card">
      <div className="country-flag-wrapper">
        <img
          src={flag}
          alt={`${name} flag`}
          className="country-flag"
        />
      </div>
      <h2 className="country-name">{name}</h2>
      <p className="country-subregion">
        <strong>Subregion:</strong> {subregion}
      </p>
      <p className="country-capital">
        <strong>Capital:</strong> {capital}
      </p>
      <p className="country-population">
        <strong>Population:</strong> {population.toLocaleString()}
      </p>
      <p className="country-languages">
        <strong>Languages:</strong>{" "}
        {[languages].map((language, index) => (
          <span key={index}>{language}</span>
        ))}
      </p>
    </div>
  );
};

export default CountriesList;
