import { Outlet } from "react-router-dom";

import Header from "./Header/Header";

function LayoutWrapper() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutWrapper;
