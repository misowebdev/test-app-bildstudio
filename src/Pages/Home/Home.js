import Box from "@mui/material/Box";

import Banner from "./Banner";
import VideoSection from "./VideoSection";
import Featured from "./Featured";
import Callout from "../../components/Callout";

function Home() {
  return (
    <Box component="main" sx={{ mt: 2 }}>
      <Banner />
      <VideoSection />
      <Featured />
      <Callout />
    </Box>
  );
}

export default Home;
