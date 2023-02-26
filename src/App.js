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
      {/* <div className="container"> */}
      <WelcomeView />
      {/* </div> */}
      {/* <div className="container"> */}
      <ValuesView />
      {/* </div> */}
      {/* <div className="container"> */}
      <ServicesView />
      {/* </div> */}

      <Footer />
    </>
  );
};

export default App;
