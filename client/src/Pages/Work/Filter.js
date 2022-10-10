import { Fragment } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

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
      <Box
        display="flex"
        alignItems="center"
        sx={{ "hr:last-child": { display: "none" }, height: "fit-content" }}
      >
        {categories.map((category) => (
          <Fragment key={category}>
            <Button
              onClick={() => onCategoryChange(category)}
              variant="text"
              sx={{
                color:
                  selectedCategory === category
                    ? "primary.main"
                    : "text.secondary",
                fontWeight: "bold",
                lineHeight: "0.875rem",
                minWidth: 0,
                pl: 0,
                pr: 0,
              }}
            >
              {category}
            </Button>
            <Divider
              sx={{
                m: 1,
                borderWidth: 1,
                bgcolor: "text.secondary",
                transform: "rotate(25deg)",
              }}
              orientation="vertical"
              flexItem
            />
          </Fragment>
        ))}
      </Box>
      <Box>
        {layouts.map((layout) => (
          <IconButton
            onClick={() => onLayoutChange(layout.name)}
            key={layout.name}
            size="small"
            sx={{
              "& svg": {
                color:
                  selectedLayout === layout.name
                    ? "primary.main"
                    : "text.secondary",
              },
            }}
          >
            {layout.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default Filter;
