import React from "react";
import "./scss/globals.scss";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//views
import WelcomeView from "./views/welcome";
import ValuesView from "./views/values";
import ServicesView from "./views/services";
import AboutView from "./views/about";

const App = () => {
  return (
    <>
      <Navbar />
      <WelcomeView />
      <ValuesView />
      <ServicesView />
      <AboutView />
      <Footer />
    </>
  );
};

export default App;
