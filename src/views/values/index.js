import React from "react";
import "./valuesView.scss";

function ValuesView() {
  const valuesArray = [
    {
      name: "values1",
      description: "Some value which is about one or two lines",
      IconComponent: <h1>Icon</h1>,
    },
    {
      name: "values2",
      description: "Some value which is about one or two lines",
      IconComponent: <h1>Icon</h1>,
    },
    {
      name: "values3",
      description: "Some value which is about one or two lines",
      IconComponent: <h1>Icon</h1>,
    },
    {
      name: "values4",
      description: "Some value which is about one or two lines",
      IconComponent: <h1>Icon</h1>,
    },
  ];

  function ValuesCard({ IconComponent, name, description }) {
    return (
      <div key={name} className="values__card">
        {IconComponent}
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <section className="values">
      <h2>We are known for our values</h2>
      <p>
        At our company, we understand the importance of delivering exceptional
        results to our clients. That's why we go above and beyond to provide
        optimum and efficiently planned services that meet their unique needs
        and challenges.{" "}
      </p>
      <section className="values__card__wrapper">
        {valuesArray.map((valueObject) => ValuesCard(valueObject))}
      </section>
    </section>
  );
}

export default ValuesView;
