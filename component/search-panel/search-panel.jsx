import { Paper, IconButton } from "@mui/material";
import { colors } from "../../contants/color";
import SearchIcon from "@mui/icons-material/Search";
const SearchPanel = () => {
  return (
    <Paper
      component={"form"}
      sx={{
        pl: 2,
        border: `1px solid ${colors.secondary}`,
        boxShadow: "none",
      }}
    >
      <input type="text" placeholder="Search..." className="search-bar" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchPanel;
