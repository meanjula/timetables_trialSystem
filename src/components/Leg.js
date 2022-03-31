import React from "react";
import { BusIcon } from "./style";
import { SubwayIcon } from "./style";
import { WalkIcon } from "./style";
import { ArrowIcon } from "./style";
const Leg = ({ key, startTime, endTime, mode, viaName }) => {
  return (
    <div key={key} className="itenary-box">
      <div className="icon-box">
        <div className="icon">
          {mode === "WALK" ? (
            <WalkIcon className="walk-icon" />
          ) : mode === "BUS" ? (
            <BusIcon />
          ) : (
            <SubwayIcon />
          )}
        </div>
        <ArrowIcon />
      </div>
      <div className="time">
        <p>
          {new Date(startTime).toLocaleString().slice(11, 17)}
          {new Date(endTime).toLocaleString().slice(11, 17)}
        </p>
        <p>Via {viaName}</p>
      </div>
    </div>
  );
};

export default Leg;
