import { Country } from "../Card.types";
import '../Card.css'

const CardFilterBySubregion = ({ data }: { data: Country }) => {
  const { name, flags, subregion, capital, population, languages } = data;
  return (
    <div className="country-card">
      <div className="country-flag-wrapper">
        <img
          src={flags.svg}
          alt={`${name.common} flag`}
          className="country-flag"
        />
      </div>
      <h2 className="country-name">{name.common}</h2>
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
          <span key={index}>
            {Object.values(language).map((lang, index, arr) => (
              <span>
                {lang}
                {index < arr.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CardFilterBySubregion;
