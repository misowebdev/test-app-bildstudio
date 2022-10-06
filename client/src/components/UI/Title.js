import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Title({ title }) {
  return (
    <Box
      sx={{
        height: 100,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h4"
          color="common.white"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

export default Title;
