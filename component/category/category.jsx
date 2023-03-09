import { Stack } from "@mui/system";
import { videoCategory } from "../../contants/index";

const Category = ({ SelectedCategoryHandle, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      style={{
        overflowX: "scroll",
        boxSizing: "border-box",
      }}
    >
      {videoCategory.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            background:
              item.name === selectedCategory && "rgba(185, 57, 57, 0.241)",
            borderRadius: item.name === selectedCategory && "15px",
          }}
          onClick={() => SelectedCategoryHandle(item.name)}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
