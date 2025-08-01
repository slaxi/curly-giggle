import { Country, CountryCardProps } from "./Card.types";
import "./Card.css";
import { CountryCard } from "../countries/Countries.type";

const Card = ({ cardProps }: { cardProps: CountryCard | Country }) => {
  console.log({ cardProps });
  return (
    <div className="country-card">
      <div className="country-flag-wrapper">
        <img
          src={"flags" in cardProps ? cardProps.flags?.svg : cardProps.flag}
          alt={`${cardProps.name} flag`}
          className="country-flag"
        />
      </div>
      <h2 className="country-name">
        {typeof cardProps.name === "object" && "common" in cardProps.name
          ? cardProps.name.common
          : cardProps.name}
      </h2>
      <p className="country-subregion">
        <strong>Subregion:</strong> {cardProps.subregion}
      </p>
      <p className="country-capital">
        <strong>Capital:</strong> {cardProps.capital}
      </p>
      <p className="country-population">
        <strong>Population:</strong> {cardProps.population.toLocaleString()}
      </p>
      <p className="country-languages">
        <strong>Languages:</strong>{" "}
        {[cardProps.languages].map((language, index) => (
            <span key={index}>
            {typeof language === "string"
              ? language
              : Object.values(language).map((key, i, arr) => (
                <span key={i}>
                {key}
                {i < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
        ))}
      </p>
    </div>
  );
};
export default Card;
