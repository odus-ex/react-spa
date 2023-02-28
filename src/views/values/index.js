import React from "react";
import "./valuesView.scss";

import EthicalIcon from "../../assets/ethical.png";
import IntegralIcon from "../../assets/integral.png";
import AccountableIcon from "../../assets/accountable.png";
import InnovativeIcon from "../../assets/innovative.png";

function ValuesView() {
  const valuesArray = [
    {
      name: "Ethical",
      description: "Some value which is about one or two lines",
      IconComponent: <img src={EthicalIcon} />,
    },
    {
      name: "Integral",
      description: "Some value which is about one or two lines",
      IconComponent: <img src={IntegralIcon} />,
    },
    {
      name: "Accountable",
      description: "Some value which is about one or two lines",
      IconComponent: <img src={AccountableIcon} />,
    },
    {
      name: "Innovative",
      description: "Some value which is about one or two lines",
      IconComponent: <img src={InnovativeIcon} />,
    },
  ];

  function ValuesCard({ IconComponent, name, description }) {
    return (
      <div key={name} className="values__card">
        <section className="values__card__icon">{IconComponent}</section>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <section className="values__view">
      <h1>We are known for our values</h1>
      <p>
        At our company, we understand the importance of delivering exceptional
        results to our clients. <br />
        That's why we go above and beyond to provide optimum and efficiently
        planned services that meet their unique needs and challenges.{" "}
      </p>
      <section className="values__card__container">
        {valuesArray.map((valueObject) => ValuesCard(valueObject))}
      </section>
    </section>
  );
}

export default ValuesView;
