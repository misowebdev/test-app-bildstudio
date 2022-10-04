import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import logo from "../../assets/images/logo.png";

import SocialIcons from "./SocialIcons";
import NavBar from "./NavBar";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  return (
    <Container maxWidth="md" component="header">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: 2,
          pb: 2,
          alignItems: "center",
        }}
      >
        <Box component="img" src={logo} alt="logo" />
        <SocialIcons />
      </Box>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <NavBar pages={pages} />
    </Container>
  );
}

export default Header;
