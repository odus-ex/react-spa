import React from "react";
import "./testimonials.scss";

function Testimonials() {
  const testimonialsArray = [
    {
      by: "Mr Bhuvanesh Pandey",
      description:
        "Thanks to the tourism department of Ajgav, who made our north east tour memorable and unique in many ways. Not only the comfort and ease of travel was taken care of but also the choice of locations was amazing. They listen to our requirements carefully and suggest the best. Thank you guys and keep up the great work.",
    },
    {
      by: "Mr J. Singh and Family",
      description:
        "Loved the superb darjeeling trip managed by Ajgav... The packages are just not the readymade kind but individually planned for travellers taking care of their concerns, comfort and most importantly interest. Thank you folks.",
    },
  ];

  function TestimonialCard({ by, description }) {
    return (
      <div key={by} className="testimonial__card">
        <p>{description}</p>
        <h4>- {by}</h4>
      </div>
    );
  }

  return (
    <div className="testimonials">
      <section className="testimonials__list">
        {testimonialsArray.map((testimonialObject) =>
          TestimonialCard(testimonialObject)
        )}
      </section>
    </div>
  );
}

export default Testimonials;
