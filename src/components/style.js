import { styled } from "@mui/material/styles";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import { AccessAlarm } from "@mui/icons-material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const BusIcon = styled(DirectionsBusIcon)(() => ({
  fontSize: 36,
  color: "rgb(30, 72, 144)",
}));

export const WalkIcon = styled(DirectionsWalkIcon)(() => ({
  fontSize: 40,
  color: "black",
}));

export const SubwayIcon = styled(DirectionsSubwayIcon)(() => ({
  fontSize: 40,
  color: "rgb(223, 130, 43)",
}));

export const Alarm = styled(AccessAlarm)(() => ({
  fontSize: 40,
  color: "rgb(30, 72, 144)",
}));
export const ArrowIcon = styled(DoubleArrowIcon)(() => ({
  fontSize: 40,
  color: "rgb(30, 72, 144)",
}));
