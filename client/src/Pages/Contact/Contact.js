import { useMutation } from "@tanstack/react-query";

import { sendMessage } from "../../api/messageApi";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Title from "../../components/UI/Title";
import Map from "./Map";
import Callout from "../../components/Callout";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import StoreHours from "./StoreHours";

function Contact() {
  const mutation = useMutation(sendMessage);

  const handleFormSubmit = (message) => {
    mutation.mutate(message);
  };

  return (
    <Box component="main" sx={{ mt: 2 }}>
      <Title title="GOT A QUESTION OR INQUIRY?" />
      <Map />
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <ContactForm onSubmit={handleFormSubmit} status={mutation.status} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfo />
            <StoreHours />
          </Grid>
        </Grid>
      </Container>
      <Callout />
    </Box>
  );
}

export default Contact;
