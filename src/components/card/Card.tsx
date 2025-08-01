import { Country } from "./Card.types";
import "./Card.css";
import { CountryCard } from "../countries/Countries.type";
import React from "react";

type TCardProps<T> = {
  data: T,
  Component: React.ComponentType<{data: T}>
}

/**
 * Renders a generic card component by delegating rendering to a provided component.
 *
 * @param cardProps - The data to be passed to the rendered component, either of type `CountryCard` or `Country`.
 * @param IComponent - The React component to render, which must accept a `cardProps` prop of type `CountryCard | Country`.
 *
 * @remarks
 * This component is useful for rendering different card layouts based on the provided `Component`.
 *
 * @example
 * ```tsx
 * <Card data={countryData} Component={CountryCardComponent} />
 * ```
 */
const Card = <T, >({
  data,
  Component,
}: TCardProps<T>) => {
  return <Component data={data} />;
};
export default Card;

// const Card = ({ cardProps }: { cardProps: CountryCard | Country }) => {
//   console.log({ cardProps });
//   return (
//     <div className="country-card">
//       <div className="country-flag-wrapper">
//         <img
//           src={"flags" in cardProps ? cardProps.flags?.svg : cardProps.flag}
//           alt={`${cardProps.name} flag`}
//           className="country-flag"
//         />
//       </div>
//       <h2 className="country-name">
//         {typeof cardProps.name === "object" && "common" in cardProps.name
//           ? cardProps.name.common
//           : cardProps.name}
//       </h2>
//       <p className="country-subregion">
//         <strong>Subregion:</strong> {cardProps.subregion}
//       </p>
//       <p className="country-capital">
//         <strong>Capital:</strong> {cardProps.capital}
//       </p>
//       <p className="country-population">
//         <strong>Population:</strong> {cardProps.population.toLocaleString()}
//       </p>
//       <p className="country-languages">
//         <strong>Languages:</strong>{" "}
//         {[cardProps.languages].map((language, index) => (
//             <span key={index}>
//             {typeof language === "string"
//               ? language
//               : Object.values(language).map((key, i, arr) => (
//                 <span key={i}>
//                 {key}
//                 {i < arr.length - 1 ? ", " : ""}
//                 </span>
//               ))}
//             </span>
//         ))}
//       </p>
//     </div>
//   );
// };