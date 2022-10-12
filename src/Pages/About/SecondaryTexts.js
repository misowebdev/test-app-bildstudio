import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Subtitle from "../../components/UI/Subtitle";

function SecondaryTexts({ content }) {
  return (
    <Grid container spacing={3} mt={3}>
      {content.map((text) => (
        <Grid item xs={12} md={6} key={text.id}>
          <Subtitle subtitle={text.title} />
          <Typography variant="body2">{text.text}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

SecondaryTexts.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SecondaryTexts;
