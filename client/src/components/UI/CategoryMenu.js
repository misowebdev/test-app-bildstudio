import { Fragment } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CategoryMenu({ categories, selectedCategory, onCategoryChange }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  if (isMobile) {
    return (
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth variant="standard" size="small">
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category-select"
            value={selectedCategory}
            label="Category"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {category.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }

  return (
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
  );
}

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryMenu;
