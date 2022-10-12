import { useQuery } from "@tanstack/react-query";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Carousel from "../../components/UI/Carousel";
import Subtitle from "../../components/UI/Subtitle";
import Spinner from "../../components/UI/Spinner";

import { listProjects } from "../../api/projectApi";

function Featured() {
  const { data, isLoading, isError, error } = useQuery(
    ["featuredProjects"],
    () => listProjects(1, 7),
    { staleTime: 5 * 60 * 1000 }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
        <Subtitle subtitle="A COUPLE OF OUR FEATURED PROJECTS" />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
          sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
          tincidunt eros.
        </Typography>
      </Container>
      <Carousel data={data.results} />
    </>
  );
}

export default Featured;
