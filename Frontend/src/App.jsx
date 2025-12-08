import React from "react";
import Appbar from "./components/Appbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";

function App() {
  return (
    <div>
      <Appbar />
      <Banner />
      <FreeBook></FreeBook>
      <Footer></Footer>
    </div>
  );
}

export default App;
