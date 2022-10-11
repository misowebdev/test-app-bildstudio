import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const defaultText = "ARE YOU READY TO BE BLOWN AWAY?";

function Callout({ text = defaultText }) {
  const onMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  return (
    <Box sx={{ bgcolor: "background.dark", mt: 3 }}>
      <Container
        maxWidth="md"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-evenly", lg: "space-between" },
        }}
      >
        <Typography
          variant={onMobile ? "body1" : "h5"}
          color="text.light"
          fontWeight="bold"
        >
          {text}
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
