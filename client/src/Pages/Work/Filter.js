import CategoryMenu from "../../components/UI/CategoryMenu";
import LayoutSwitch from "../../components/UI/LayoutSwitch";

import Box from "@mui/material/Box";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const layouts = [
  { name: "grid", icon: <BsGridFill /> },
  { name: "list", icon: <FaList /> },
];
const categories = ["all", "print", "photography", "web", "applications"];

function Filter({
  selectedCategory,
  selectedLayout,
  onCategoryChange,
  onLayoutChange,
}) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <LayoutSwitch
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        selectedLayout={selectedLayout}
      />
    </Box>
  );
}

export default Filter;
