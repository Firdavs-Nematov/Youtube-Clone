import {
  Checkroom,
  ConnectedTv,
  FaceRetouchingNatural,
  Home,
  LiveTv,
  Money,
  MusicNote,
  Podcasts,
  School,
  SportsBaseball,
  SportsEsports,
  SportsGymnastics,
  TheaterComedy,
} from "@mui/icons-material";

export const logo =
  "https://as1.ftcdn.net/v2/jpg/04/79/95/46/1000_F_479954643_NI9vlFLz1pxk0tQqFck2autcM2cFnbgY.jpg";
export { default as Main } from "../component/main/main.jsx";
export { default as Channel } from "../component/channel/channel.jsx";
export { default as Search } from "../component/search/search.jsx";
export { default as Navbar } from "../component/navbar/navbar.jsx";

export const videoCategory = [
  { name: "New", icon: <Home /> },
  { name: "Movies", icon: <ConnectedTv /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <SportsBaseball /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <Podcasts /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <Money /> },
  { name: "Gym", icon: <SportsGymnastics /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];
