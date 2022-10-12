import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Title from "../../components/UI/Title";
import MainText from "./MainText";
import SecondaryTexts from "./SecondaryTexts";
import Services from "./Services";
import Callout from "../../components/Callout";
import Spinner from "../../components/UI/Spinner";

import { getAboutData } from "../../api/aboutApi";

function About() {
  const { data, isLoading, isError, error } = useQuery(
    ["about"],
    getAboutData,
    { staleTime: 5 * 60 * 1000 }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      <Helmet defer={false}>
        <title>About</title>
        <meta name="description" content="About Page nice description" />
      </Helmet>
      <Box component="main" sx={{ mt: 2 }}>
        <Title title={"ABOUT MY BUSINESS"} />
        <Container maxWidth="md" component="section">
          <MainText content={data.mainText} />
          <SecondaryTexts content={data.secondaryTexts} />
        </Container>
        <Container disableGutters maxWidth="false" component="section">
          <Services content={data.services} />
        </Container>
        <Callout />
      </Box>
    </>
  );
}

export default About;
