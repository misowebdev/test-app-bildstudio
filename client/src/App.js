import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "@mui/material";

import MainRouter from "./MainRouter";
import theme from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <Helmet defer={false}>
        <title>Display</title>
        <meta name="description" content="Frontend Test App" />
        <meta name="keywords" content="keyword1, keyword2 keyword3" />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
