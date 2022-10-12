import { Fragment } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Work", link: "/work" },
  { label: "Contact", link: "/contact" },
];

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.light", pt: 2, pb: 2 }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2" component="p">
          COPYRIGHT {new Date().getFullYear()} DISPLAY. ALL RIGHTS RESERVED.
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          sx={{ "hr:last-child": { display: "none" }, height: "fit-content" }}
        >
          {pages.map((page) => (
            <Fragment key={page.label}>
              <Button
                component={Link}
                to={page.link}
                variant="text"
                sx={{
                  color: "text.secondary",
                  lineHeight: "0.875rem",
                  minWidth: 0,
                  pl: 0,
                  pr: 0,
                }}
              >
                {page.label}
              </Button>
              <Divider
                sx={{
                  m: 1,
                  borderWidth: 1,
                  bgcolor: "text.secondary",
                  transform: "rotate(25deg)",
                }}
                orientation="vertical"
                flexItem
              />
            </Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
