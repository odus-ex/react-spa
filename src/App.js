import React from "react";
import "./scss/globals.scss";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//views
import WelcomeView from "./views/welcome";
import ValuesView from "./views/values";
import ServicesView from "./views/services";

const App = () => {
  return (
    <>
      <Navbar />
      <WelcomeView />
      <ValuesView />
      <ServicesView />
      <Footer />
    </>
  );
};

export default App;
