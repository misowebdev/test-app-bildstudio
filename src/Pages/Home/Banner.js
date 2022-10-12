import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Animate({ children, delay }) {
  const animation = useSpring({
    from: { opacity: 0, transform: "scale(1.4)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: delay || 0,
    config: { duration: 300 },
  });

  return <animated.div style={animation}>{children}</animated.div>;
}

function Banner() {
  return (
    <Box
      sx={{
        maxHeight: 800,
        pt: 5,
        pb: 5,
        background:
          "url(images/slider-background.png) center / cover no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{ textAlign: "center", "&& > *": { mt: 4 } }}
      >
        <Animate>
          <Box
            component="img"
            src="images/slider-devices.png"
            alt="devices"
            width="80%"
          />
        </Animate>
        <Animate delay={300}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria
            justo, faucibus eu.
          </Typography>
        </Animate>
        <Animate delay={600}>
          <Button
            component={Link}
            to="/work"
            variant="contained"
            sx={{ color: "text.light", fontWeight: "bold" }}
          >
            Browse Portfolio
          </Button>
        </Animate>
      </Container>
    </Box>
  );
}

export default Banner;
