import { useFecthData } from "../../../hooks/useFetchData";
import Card from "../card/Card";
import { CountryCard } from "./Countries.type";
import "./Countries.css";
import SubregionFilters from "../filters/subregion-filters/SubregionFilters";
import { useCallback, useMemo, useState } from "react";
import CardFilterBySubregion from "../card/cardFilterBySubregion/cardFilterBySubregion";
import CountriesList from "../card/countriesList/CountriesList";

const Countries = () => {
  const apiUrl = "https://restcountries.com/v3.1/region/europe";
  const { data, error, loading } = useFecthData(apiUrl);
  const [countriesBySubregion, setCountriesBySubregion] = useState<
    CountryCard[] | []
  >([]);
  const filteredBySubregion = useCallback(
    (subregion: string) => {
      return data.filter((country) => country.subregion === subregion);
    },
    [data]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const countriesCard: CountryCard[] = data.map(
    (country: any): CountryCard => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "No capital",
      population: country.population,
      area: country.area,
      flag: country.flags.svg,
      region: country.region,
      subregion: country.subregion,
      languages: Object.values(country.languages || {}).join(", "),
      currencies: Object.values(country.currencies || {})
        .map((currency: any) => currency.name)
        .join(", "),
    })
  );

  const handleSubregionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filteredList = filteredBySubregion(event.target.value);

    if (!filteredList.length) setCountriesBySubregion(data);
    setCountriesBySubregion(filteredList);
  };
  return (
    <>
      <h1 className="countries-title">Countries of Europe</h1>
      <h3>Browse by region:</h3>
      <SubregionFilters
        countriesList={countriesCard}
        onHandleChange={handleSubregionChange}
      />
      {countriesBySubregion.length ? (
        <>
          <div className="countries-grid">
            {countriesBySubregion.map((country) => {
              return (
                <Card
                  data={country}
                  key={country.population}
                  Component={CardFilterBySubregion}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="countries-grid">
          {countriesCard.map((country) => (
            <Card
              data={country}
              key={country.population}
              Component={CountriesList}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
