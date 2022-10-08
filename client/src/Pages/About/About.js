import { useQuery } from "@tanstack/react-query";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Title from "../../components/UI/Title";
import MainText from "./MainText";
import SecondaryTexts from "./SecondaryTexts";
import Services from "./Services";
import Callout from "../../components/Callout";
import Spinner from "../../components/UI/Spinner";

import { getAboutData } from "../../api/api";

function About() {
  const { data, isLoading, isError, error } = useQuery(["about"], getAboutData);

  if (isLoading) return <Spinner />;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <Box component="main" sx={{ mt: 2 }}>
      <Title title={data.title} />
      <Container maxWidth="md" component="section">
        <MainText content={data.mainText} />
        <SecondaryTexts content={data.secondaryTexts} />
      </Container>
      <Container disableGutters maxWidth="false" component="section">
        <Services content={data.services} />
      </Container>
      <Callout />
    </Box>
  );
}

export default About;
