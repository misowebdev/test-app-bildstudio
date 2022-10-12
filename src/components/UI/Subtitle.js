import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

function Subtitle({ subtitle, mt = 2, mb = 2 }) {
  return (
    <Typography component="h3" variant="h6" sx={{ fontWeight: "bold", mt, mb }}>
      {subtitle}
    </Typography>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
