import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer";

import Container from "@mui/material/Container";

function LayoutWrapper() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        "& > footer": { mt: "auto" },
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default LayoutWrapper;
