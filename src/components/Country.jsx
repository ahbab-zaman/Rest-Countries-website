import { useState } from 'react';
import './component.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {

    const [visited, setVisited] = useState("")

    function handleVisit(){
       setVisited(!visited)
    }
    const {name, flags} = country;
    return (
        <div className={`country ${visited===true ? 'visited': ""}`}>
          
          <h4>Name : {name.common} </h4>
           <img src={flags.png} alt="" />
           <button onClick={handleVisit}>{visited?'visited':'Going'}</button>
           {
            visited ? "visited" : "want to go"
           }
           <br />
           {/* if you want to pass a parameter to a onClick you have to write an arrow function in it... Or if you don't want to pass any parameter you can only pass the function name */}
           <button onClick={()=>handleVisitedCountries(country)}>Mark visited</button>
           <button onClick={()=>handleVisitedFlags(country.flags.png)}>Mark flags</button>
        </div>
    );
};

export default Country;