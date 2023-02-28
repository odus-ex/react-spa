import React from "react";
import "./servicesView.scss";

import energyIcon from "../../assets/energy.png";
import csrIcon from "../../assets/csr.png";
import constructionIcon from "../../assets/construction.png";
import hrIcon from "../../assets/hr.png";

function ServicesView() {
  const servicesArray = [
    {
      name: "Renewable energy",
      icon: <img src={energyIcon} />,
      description:
        "We specialise in offering tailored solutions for Greenfield and Brownfield Projects. Our experienced professionals are dedicated to providing end-to-end project management services, ensuring the successful delivery of projects within your desired specifications for quality, scope, and functionality. Our expertise in construction management and a deep understanding of the challenges faced by owners, contractors, engineers, and architects, enables us to offer cost-effective and efficient solutions. Contact us today to see how we can support you in bringing your Greenfield and Brownfield projects to life. At our company, we specialise in providing top-notch Renewable Energy consulting services to meet the increasing demand for sustainable energy solutions. Our team of experienced consultants offers a wide range of services, including project management, feasibility studies, and complete design and implementation of renewable energy projects. Whether you're looking to install solar panels, wind turbines, or hydropower systems, our experts have the knowledge and expertise to guide you through every step of the process. With our commitment to quality and attention to detail, we are dedicated to helping you unlock the full potential of renewable energy and achieve your goals.",
    },
    {
      name: "HR consultancy",
      icon: <img src={csrIcon} />,
      description:
        "Our aim is to support individuals and organisations in reaching their full potential. We believe that connecting the right talent with the right job can have a positive impact on both parties, and our goal is to assist employers in finding and retaining the right talent to support their continued growth. By working closely with both employers and job seekers, we aim to match the right talent to the right role and create mutually beneficial outcomes. Our focus is on providing HR consultancy services that help clients identify, attract, and retain the best talent to meet their business goals and support long-term success.",
    },
    {
      name: "Construction Management",
      icon: <img src={constructionIcon} />,
      description:
        "Our team of highly qualified professionals is dedicated to delivering your projects to the highest standards of quality, scope, and functionality. Our experts understand the unique challenges faced by owners, contractors, engineers, and architects during the construction process, and are committed to providing tailored solutions that meet your specific needs. Our services include Cost Estimation, Construction Scheduling, Contract Administration, and Constructability Review, and our team will work closely with you to ensure that your projects are completed on time and to your exact specifications. With a deep understanding of the local business environment and a commitment to delivering the best possible results, our professionals are the ideal choice for anyone looking to ensure the success of their construction projects.",
    },
    {
      name: "Corporate Social Responsibility",
      icon: <img src={hrIcon} />,
      description:
        'We at Ajgav Projects Management and Services Pvt.,  deeply understand the need to grow in unison with our society.  A balanced and healthy society both mentally and physically, not only promotes sustainable development but also creates equal opportunities,  prosperity and better lifestyle. At the times of pandemic when most of us were clueless about future business endeavours, there were sections struggling for day to day life. It was a time to put aside balance sheet goals and come together to support the nation as a whole. So,  we took up various initiatives to provide every possible support to the institutions that were involved in such activities.  We participated in door to door food,  clothes and grocery distribution campaigns from time to time during the  Corona pandemic.  Being only a year old it was a huge challenge and survival quest for us as well but we decided to head for the bigger cause and it still continues. APMS is actively engaged in the missions related to education and child welfare,  where we support the NGOs involved with government schools,  Aganbadi,  and other such institutions.  We have been an active supporter of the NGOs, "Udaan" and "Apki Muskaan"  in their works.',
    },
  ];

  function ServiceBlock({ name, icon, description }) {
    return (
      <div key={name} className="services__list__item">
        <div className="services__list__item__head">
          <section className="services__icon">{icon}</section>
          <h3>{name}</h3>
        </div>
        <div className="services__list__item__body">
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="services">
      <h1>Products & Services</h1>
      <p>
        With a focus on innovation and sustainability, we work closely with our
        clients to create customised solutions that are tailored to their
        specific requirements. <br />
        We are dedicated to delivering results that meet and exceed our clients'
        expectations, ensuring their projects are completed on time, within
        budget, and to the highest standards
      </p>
      <section className="services__list">
        {servicesArray.map((serviceObject) => ServiceBlock(serviceObject))}
      </section>
    </div>
  );
}

export default ServicesView;
