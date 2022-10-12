import PropTypes from "prop-types";

import CardItem from "./CardItem";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function GridView({ data }) {
  if (!data.length) {
    return (
      <Box sx={{ pt: 10, textAlign: "center" }}>
        <Typography variant="h5">No Results</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {data?.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <CardItem image={item.image} name={item.name} />
        </Grid>
      ))}
    </Grid>
  );
}

GridView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridView;
