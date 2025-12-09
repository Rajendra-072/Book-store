import React from "react";
import Appbar from "./Appbar";
import Banner from "./Banner";
import FreeBook from "./FreeBook";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Appbar />
      <Banner />
      <FreeBook></FreeBook>
      <Footer></Footer>
    </>
  );
}

export default Home;
