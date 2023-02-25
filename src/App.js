import React from "react";
import "./scss/globals.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <h1> Container 1</h1>
          <p>Its body</p>
        </div>
        <div className="container">
          <h1> Container 2</h1>
          <p>Its body</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
