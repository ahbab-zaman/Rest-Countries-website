import { useEffect, useState } from "react";
import Country from "./Country";
import "./components.css";

const Component = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  const [flags, setFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
//   visited countries function
  const handleVisitedCountries = (country) => {
    // If you want to display a list or any item of array on your UI you can't push or pop the array in react. You have to copy the array first using spread operator then set it through set(state) function
    const newVisitedCountry = [...visited, country];
    setVisited(newVisitedCountry);
  };

//   visited flags function
const handleVisitedFlags = (flag)=>{
    // If you want to display a list or any item of array on your UI you can't push or pop the array in react. You have to copy the array first using spread operator then set it through set(state) function

    const newAddedFlags = [...flags, flag]
    setFlags(newAddedFlags)
}

  return (
    <div>
      <h2>Countries details....</h2>
      <h2>Countries : {countries.length}</h2>
      <h2>Visited country:{visited.length} </h2>
    
      <ul>
        {visited.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
      <h2>Visited flags:{flags.length}</h2>
      <ul className="flag">
        {
            flags.map(flag=><li>
                <img src={flag}></img>
            </li>)
        }
      </ul>
      <div className="component-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
