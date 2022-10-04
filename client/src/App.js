import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import MainRouter from "./MainRouter";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
