import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const BusIcon = styled(DirectionsBusIcon)(() => ({
  fontSize: 32,
  color: "rgb(30, 72, 144)",
}));

export const WalkIcon = styled(DirectionsWalkIcon)(() => ({
  fontSize: 36,
  color: "black",
}));

export const SubwayIcon = styled(DirectionsSubwayIcon)(() => ({
  fontSize: 36,
  color: "rgb(223, 130, 43)",
}));

export const Alarm = styled(AccessAlarmIcon)(() => ({
  fontSize: 36,
  color: "rgb(223, 130, 43)",
}));
export const ArrowIcon = styled(DoubleArrowIcon)(() => ({
  fontSize: 36,
  color: "rgb(30, 72, 144)",
}));
