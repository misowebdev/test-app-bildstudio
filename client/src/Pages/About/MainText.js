import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function MainText({ content }) {
  return (
    <Grid container spacing={3} mt={3} mb={3}>
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={`images/${content.image}`}
          width="100%"
          maxHeight={{ xs: undefined, md: 240 }}
          sx={{ objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="body2">{content.text}</Typography>
      </Grid>
    </Grid>
  );
}

MainText.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainText;
