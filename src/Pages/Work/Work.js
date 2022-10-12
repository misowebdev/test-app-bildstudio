import { Helmet } from "react-helmet-async";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Callout from "../../components/Callout";

import Title from "../../components/UI/Title";
import Portfolio from "./Portfolio";

function Work() {
  return (
    <>
      <Helmet defer={false}>
        <title>Work</title>
        <meta name="description" content="Work Page nice description" />
      </Helmet>
      <Box component="main" sx={{ mt: 2 }}>
        <Title title="CHECK OUT WHAT I CAN DO" />
        <Container maxWidth="md" component="section" sx={{ mt: 3 }}>
          <Portfolio />
        </Container>
        <Callout />
      </Box>
    </>
  );
}

export default Work;
