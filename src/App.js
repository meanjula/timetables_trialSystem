import "./App.css";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Landing from "./components/Landing";

import Itenary from "./components/Itenary";
const generateQuery = (from, to) => {
  return `
 {
    plan(
      fromPlace: "${from}",
      toPlace:"${to}" ,  
    ) {
      
      itineraries{
      walkDistance,
      duration,
      legs {
        mode
        startTime
        endTime
        from {
        lat
        lon
        name
        stop {
          code
          name
        }
        },
        to {
        lat
        lon
        name
        },
        agency {
        gtfsId
            name
        },
        distance
        legGeometry {
        length
        points
        }
      }
      }
    }  
  }
  
  }`;
};

function App() {
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState(
    "Lapinlahdenkatu 12, Helsinki::60.167247,24.924224"
  );
  const [dataf, setDataf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(false);

  const handleFrom = (event) => {
    event.preventDefault();
    getCoordinatesFrom(event.target.value);
  };
  const handleTo = (event) => {
    event.preventDefault();
    getCoordinatesTo(event.target.value);
  };
  const getAddress = (data) => {
    const fetcheddata = data.features[0];
    const coordinates = fetcheddata.geometry.coordinates;
    const stringCoordinates = coordinates.reverse().join();
    const region = fetcheddata.properties.locality;
    const name = fetcheddata.properties.name;

    const fullAddress = `${name}, ${region}::${stringCoordinates}`;
    return fullAddress;
  };
  const getCoordinatesFrom = (from) => {
    fetch(`https://api.digitransit.fi/geocoding/v1/search?text=${from}&size=1`)
      .then((response) => response.json())
      .then((data) => {
        const fromFullAddress = getAddress(data);
        setValueFrom(fromFullAddress);
      });
  };
  const getCoordinatesTo = (to) => {
    fetch(`https://api.digitransit.fi/geocoding/v1/search?text=${to}&size=1`)
      .then((response) => response.json())
      .then((data) => {
        const toFullAddress = getAddress(data);
        setValueTo(toFullAddress);
      });
  };
  const getData = (from, to) => {
    fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: generateQuery(from, to) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDataf(data.data.plan);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getData(valueFrom, valueTo);
  }, [valueFrom, valueTo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(valueFrom, valueTo);
    setSelected(true);
  };

  return (
    <div className="App">
      <h1>Timetables</h1>
      <div className="text-container">
        <label>
          <input
            data-testid="inputFrom"
            type="text"
            onChange={handleFrom}
            className="from textfield"
            from={valueFrom}
          />
        </label>
        <label>
          <input
            data-testid="inputTo"
            type="text"
            onChange={handleTo}
            className="to textfield"
            to={valueTo}
            defaultValue="Lapinlahdenkatu 12, Helsinki::60.167247,24.924224"
          />
        </label>
        <button data-testid="button" onClick={handleSubmit} className="button">
          submit
        </button>
      </div>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Container data-testid="container">
          {!selected && <Landing />}
          {selected && (
            <div data-testid="result-box">
              {dataf.itineraries.map((itenary) => (
                <Itenary
                  duration={itenary.duration}
                  walkDistance={itenary.walkDistance}
                  legs={itenary.legs}
                />
              ))}
            </div>
          )}
        </Container>
      )}
    </div>
  );
}

export default App;
