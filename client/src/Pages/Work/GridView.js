import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { HiLink } from "react-icons/hi";

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
      {data.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card
            sx={{
              height: 220,
              cursor: "pointer",
              position: "relative",
              ":hover div": { opacity: 1 },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={`images/${project.image}`}
              alt={project.name}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                bgcolor: "#ffffff80",
                opacity: 0,
                transition: ".5s ease",
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  p: 2,
                  "& svg": { color: "white", width: 50, height: 50 },
                }}
              >
                <HiLink />
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default GridView;
