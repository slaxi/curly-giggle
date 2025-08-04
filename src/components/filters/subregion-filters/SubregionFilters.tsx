import React, { useMemo } from "react";
import { CountryCard } from "../../countries/Countries.type";
import "./Subregion.css";

const SubregionFilters = ({
  countriesList,
  onHandleChange,
}: {
  countriesList: CountryCard[];
  onHandleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const filterBySubregion = countriesList.reduce((acc: string[], curr: CountryCard) => {
      if (acc.includes(curr.subregion)) return acc;
      acc.push(curr.subregion);
      return acc;
    }, []);

  return (
    <div className="subregion-filters">
      <select className="subregion-select" onChange={onHandleChange}>
        <option value="">Select subregion</option>
        {filterBySubregion.map((subregion) => (
          <option key={subregion} value={subregion}>
            {subregion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubregionFilters;
