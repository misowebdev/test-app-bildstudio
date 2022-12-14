import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import LayoutWrapper from "./components/LayoutWrapper";
import PageNotFound from "./Pages/PageNotFound";

function MainRouter() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
