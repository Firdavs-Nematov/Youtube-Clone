import { Link, Stack } from "@mui/material";
import { logo } from "../../contants/";
import { colors } from "../../contants/color";
import SearchPanel from "../search-panel/search-panel";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      margin={"1rem 0 2rem"}
      x={{
        position: "sticky",
        zIndex: 999,
        top: 0,
        background: colors.primary,
        p: 2,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="NFI logo" width={50} />
      </Link>
      <SearchPanel />
    </Stack>
  );
};

export default Navbar;
