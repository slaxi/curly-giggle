import { useFecthData } from "../../../hooks/useFetchData";
import Card from "../card/Card";
import { CountryCard } from "./Countries.type";
import "./Countries.css";
import SubregionFilters from "../filters/subregion-filters/SubregionFilters";
import { useCallback, useEffect, useMemo, useState } from "react";
import CardFilterBySubregion from "../card/cardFilterBySubregion/cardFilterBySubregion";
import CountriesList from "../card/countriesList/CountriesList";
import NameFilters from "../filters/name-filters/NameFilters";
import { sortedListByOrder } from "../../utils/filterList";

const Countries = () => {
  const apiUrl = "https://restcountries.com/v3.1/region/europe";
  const { data, error, loading } = useFecthData(apiUrl);
  // const [countriesCard, setCountriesCard] = useState<CountryCard[] | []>([]);
  const [countriesBySubregion, setCountriesBySubregion] = useState<
    CountryCard[] | []
  >([]);
  const [countriesByName, setCountriesByName] = useState<CountryCard[] | []>(
    []
  );
  const filteredBySubregion = useCallback(
    (subregion: string) => {
      return data.filter((country) => country.subregion === subregion);
    },
    [data]
  );

  const countriesCard = useMemo(() => {
    return data.map(
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
      }))
  }, [data])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // let countriesCard: CountryCard[] = data.map(
  //   (country: any): CountryCard => ({
  //     name: country.name.common,
  //     capital: country.capital ? country.capital[0] : "No capital",
  //     population: country.population,
  //     area: country.area,
  //     flag: country.flags.svg,
  //     region: country.region,
  //     subregion: country.subregion,
  //     languages: Object.values(country.languages || {}).join(", "),
  //     currencies: Object.values(country.currencies || {})
  //       .map((currency: any) => currency.name)
  //       .join(", "),
  //   })
  // );

  const handleSubregionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filteredList = filteredBySubregion(event.target.value);

    if (!filteredList.length) setCountriesBySubregion(data);
    setCountriesBySubregion(filteredList);
    setCountriesByName([]);
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByOrder = sortedListByOrder(event.target.value);
    setCountriesByName(sortByOrder(countriesCard));
    setCountriesBySubregion([]);
  };

  return (
    <>
      <NameFilters onHandleChange={handleOrderChange} />
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
        ""
      )}
      {countriesByName.length ? (
        <>
          <div className="countries-grid">
            {countriesByName.map((country) => {
              return (
                <Card
                  data={country}
                  key={country.population}
                  Component={CountriesList}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
      {!countriesByName.length || !countriesBySubregion.length ? <div className="countries-grid">
        {countriesCard?.map((country) => (
          <Card
            data={country}
            key={country.population}
            Component={CountriesList}
          />
        ))}
      </div> : ''}
    </>
  );
};

export default Countries;
