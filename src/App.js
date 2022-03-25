import "./App.css";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { BusIcon } from "./components/style";
import { SubwayIcon } from "./components/style";
import { WalkIcon } from "./components/style";
import { CircularProgress } from "@mui/material";
import { ArrowIcon } from "./components/style";
import { Alarm } from "@mui/icons-material";

const generateQuery = (from, to) => {
  return `
 {
    plan(
      fromPlace: "${from}",
      toPlace:"${to}" ,
      numItineraries: 5,
      
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
  const [valueFrom, setValueFrom] = useState(
    "Lapinlahdenkatu , Helsinki::60.1675,24.92301"
  );
  const [valueTo, setValueTo] = useState(
    "Roihuvuori,Helsinki::60.1999992 25.0666664"
  );
  const [dataf, setDataf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFrom = (event) => {
    setValueFrom(event.target.value);
    console.log(event.target.value);
  };
  const handleTo = (event) => {
    event.preventDefault();
    setValueTo(event.target.value);
  };

  const getData = (from, to) => {
    fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: generateQuery(from, to) }),
    })
      .then((response) => response.json(console.log(response)))
      .then((data) => {
        setDataf(data.data.plan);
        setIsLoading(false);
        console.log(dataf);
      });
  };
  useEffect(() => {
    getData(valueFrom, valueTo);
  }, []);

  return (
    <div className="App">
      <h1>Timetables</h1>
      <div className="text-container">
        <label>
          <input
            placeholder="Lapinlahdenkatu , Helsinki::60.1675,24.92301"
            onChange={handleFrom}
            className="from tfield"
            form={valueFrom}
          />
        </label>
        <label>
          <input onChange={handleTo} className="to textfield" to={valueTo} />
        </label>
        <button onClick={getData}>submit</button>
      </div>
      {isLoading && <CircularProgress />}
      <div>
        {!isLoading && (
          <Container className="container">
            <div>
              {dataf.itineraries.map((itenary) => (
                <div key={itenary.duration} className="card">
                  <div className="walk-distance">
                    <WalkIcon />
                    <p>{(itenary.walkDistance / 100).toFixed(2)}km</p>
                  </div>
                  <div className="itenaries">
                    {itenary.legs.map((leg) => (
                      <div key={leg.lat} className="itenary-box">
                        <div className="icon-box">
                          <div className="icon">
                            {leg.mode === "WALK" ? (
                              <WalkIcon className="walk-icon" />
                            ) : leg.mode === "BUS" ? (
                              <BusIcon />
                            ) : (
                              <SubwayIcon />
                            )}
                          </div>
                          <ArrowIcon />
                        </div>

                        <p>
                          {new Date(leg.startTime).toISOString().slice(11, 16)}-
                          {new Date(leg.endTime).toISOString().slice(11, 16)}
                        </p>
                        <p>Via {leg.from.name}</p>
                      </div>
                    ))}
                    <div className="totalTime-box">
                      <Alarm />
                      <p>{itenary.duration / 100} min</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;
