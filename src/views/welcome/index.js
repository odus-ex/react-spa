import React from "react";
import "./welcomeView.scss";

import WelcomeIllustration from "../../assets/illustration_welcome.svg";

import Button from "../../components/Button";

import TypewriterComponent from "typewriter-effect";

function WelcomeView() {
  return (
    <div className="welcome__view">
      <section className="welcome__view__main">
        <h1>Your premium consulting partners</h1>
        <p>
          As trusted consultants, we offer personalised services to project
          promoters and finance advisers. Along with our renewable energy
          services, we also specialise in tour planning and HR solutions, making
          us a one-stop-shop for all your business needs.
        </p>
        <Button label={"Contact Us"} clickHandler={() => console.log("CTA")} />
      </section>
      <aside className="welcome__view__aside">
        <h3>Consult with our experts on </h3>
        <TypewriterComponent
          options={{
            strings: [
              "Renewable Energy..",
              "Human Resource Management..",
              "Tour Planning..",
              "CSR initiatives..",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="welcome__illustrator">
          <img src={WelcomeIllustration} />
        </div>
      </aside>
    </div>
  );
}

export default WelcomeView;
