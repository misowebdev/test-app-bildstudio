import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

function LayoutSwitch({ layouts, onLayoutChange, selectedLayout }) {
  return (
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
  );
}

LayoutSwitch.propTypes = {
  layouts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  selectedLayout: PropTypes.oneOf(["grid", "list"]).isRequired,
};

export default LayoutSwitch;
