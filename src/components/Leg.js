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
      <p>
        {new Date(startTime).toISOString().slice(11, 16)}-
        {new Date(endTime).toISOString().slice(11, 16)}
      </p>
      <p>Via {viaName}</p>
    </div>
  );
};

export default Leg;
