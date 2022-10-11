import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { BsFillPlayFill } from "react-icons/bs";

import Subtitle from "../../components/UI/Subtitle";
import PopUp from "../../components/UI/PopUp";

function VideoSection() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <Box sx={{ bgcolor: "background.light", p: 4 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box
              onClick={handleClick}
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                  "url(images/video-placeholder.png) center / cover no-repeat",
                height: "100%",
                minHeight: { xs: 300, sm: 400, md: 200 },
                ":hover": { opacity: 0.7 },
                "& svg": {
                  color: "background.medium",
                  width: 120,
                  height: 120,
                },
              }}
            >
              <BsFillPlayFill />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Subtitle subtitle="GET TO KNOW US A LITTLE BETTER!" mt={0} />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque, id
              ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
              elit congue lacinia.
              <br />
              <br /> Nullam tellus turpis, fringilla sit amet congue ut, luctus
              a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <PopUp open={open} onClose={handleClose}>
        <Box
          component="iframe"
          sx={{ aspectRatio: "16 / 9", minHeight: { sm: 315 } }}
          width="100%"
          src="https://www.youtube.com/embed/hz6k3kqTyko"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></Box>
      </PopUp>
    </Box>
  );
}

export default VideoSection;
