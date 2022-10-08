import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Callout() {
  return (
    <Box sx={{ bgcolor: "background.dark", mt: 3 }}>
      <Container
        maxWidth="md"
        sx={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" color="text.light" fontWeight="bold">
          ARE YOU READY TO BE BLOWN AWAY?
        </Typography>
        <Button
          size="large"
          variant="contained"
          sx={{ color: "text.light", fontWeight: "bold" }}
        >
          CLICK HERE TO FIND OUT
        </Button>
      </Container>
    </Box>
  );
}

export default Callout;
