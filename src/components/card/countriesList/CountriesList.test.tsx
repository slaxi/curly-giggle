import { render, screen } from "@testing-library/react";
import CountriesList from "./CountriesList";

const data = {
  name: "France",
  subregion: "Western Europe",
  capital: "Paris",
  population: 67391582,
  languages: "French",
  area: 238391,
  flag: "https://flagcdn.com/fr.svg",
  region: "Europe",
  currencies: "Euro",
};

describe("Countries List Component", () => {
  beforeEach(() => {
    render(<CountriesList data={data} />);
  });
  it("should accept proper data props", async () => {
    const countryName = await screen.findByRole('heading', {level: 2});

    expect(countryName).toBeInTheDocument()
  });
  it("should display correct data based on props", async () => {
    const countryName = await screen.findByRole('heading', {level: 2});

    expect(countryName).toHaveTextContent('France')
  });
});
