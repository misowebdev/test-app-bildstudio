import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

function Subtitle({ subtitle, ...style }) {
  return (
    <Typography
      component="h3"
      variant="h6"
      sx={{ fontWeight: "bold", mt: 2, mb: 2, ...style }}
    >
      {subtitle}
    </Typography>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
