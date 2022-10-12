import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function NavBar({ pages }) {
  const theme = useTheme();
  const activeStyle = { color: theme.palette.primary.main };

  return (
    <Box component="nav">
      {pages.map((page) => (
        <Button
          sx={{ color: "text.secondary", fontWeight: "bold" }}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          size="large"
          component={NavLink}
          to={page.path}
          end={true}
          key={page.label}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
}

export default NavBar;
