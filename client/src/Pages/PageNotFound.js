import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function PageNotFound() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", p: 8 }}>
      <Typography color="error" variant="h1">
        OOPS!
      </Typography>
      <Typography variant="h5">
        We can't find the page you're looking for.
      </Typography>
    </Container>
  );
}

export default PageNotFound;
