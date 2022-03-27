import React from "react";
import { WalkIcon } from "./style";
import { Alarm } from "@mui/icons-material";
import Leg from "./Leg";

const Itenary = ({ legs, walkDistance, duration }) => {
  return (
    <div key={duration} className="card">
      <div className="walk-distance">
        <WalkIcon />
        <p>{(walkDistance / 100).toFixed(2)}km</p>
      </div>
      <div className="itenaries">
        {legs.map((leg) => (
          <Leg
            key={leg.from.name}
            startTime={leg.startTime}
            endTime={leg.endTime}
            mode={leg.mode}
            viaName={leg.from.name}
          />
        ))}
        <div className="totalTime-box">
          <Alarm data-testid="alarm" />
          <p>{duration / 100} min</p>
        </div>
      </div>
    </div>
  );
};

export default Itenary;
