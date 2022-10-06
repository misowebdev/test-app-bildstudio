import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#2ecc71",
    },
    secondary: {
      main: "#00bbf5",
    },
    background: {
      light: "#efefef",
      medium: "#dadada",
      dark: "#322f2f",
    },
  },
  typography: {
    allVariants: {
      color: "#00000099",
    },
  },
});

theme.typography.h4 = {
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.425rem",
  },
};

export default theme;
