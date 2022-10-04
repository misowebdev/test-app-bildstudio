import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

function NavBar({ pages }) {
  const theme = useTheme();
  const activeStyle = { color: theme.palette.primary.main };
  return (
    <>
      {pages.map((page) => (
        <Button
          sx={{ color: "text.secondary", fontWeight: "bold" }}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          component={NavLink}
          to={page.path}
          end={true}
          key={page.label}
        >
          {page.label}
        </Button>
      ))}
    </>
  );
}

export default NavBar;
