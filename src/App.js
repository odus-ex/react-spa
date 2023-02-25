import React from "react";
import "./scss/globals.scss";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//views
import WelcomeView from "./views/welcome";
// import ServicesView from "./views/offerings";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <WelcomeView />
      </div>

      <Footer />
    </>
  );
};

export default App;
