import React from "react";
import "./aboutView.scss";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonial";

function AboutView() {
  return (
    <div className="about">
      <h1>Sneak peak our culture</h1>
      <div className="about__content">
        <section className="about__gallery">
          <Gallery />
        </section>
        <section className="about__testimonials">
          <Testimonials />
        </section>
      </div>
    </div>
  );
}

export default AboutView;
