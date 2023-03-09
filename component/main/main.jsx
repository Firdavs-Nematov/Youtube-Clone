import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import Category from "../category/category";
import Videos from "../Videos/videos";

const Main = () => {
  const [selectedCategory, SelectedCategory] = useState("New");
  const SelectedCategoryHandle = (category) => {
    SelectedCategory(category);
  };
  console.log(process.env.REACT_APP_PUBLIC_KEY);
  return (
    <Stack>
      <Category
        SelectedCategoryHandle={SelectedCategoryHandle}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Typography variant="h4" fontWeight={"bold"}>
          {selectedCategory} <span style={{ color: "#ff0000a8" }}>videos</span>
        </Typography>
      </Box>
      <Videos />
    </Stack>
  );
};

export default Main;
