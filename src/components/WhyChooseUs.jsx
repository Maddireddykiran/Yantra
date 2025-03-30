import React from "react";
import "../styles/WhyChooseUs/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Cost-effectiveness",
      description: "You can save up to 60% of the project cost. Yes, you read that right. This is a major reason why businesses choose us.",
      icon: "💰",
    },
    {
      title: "Skilled developers",
      description: "Yantra has the best offshore developers who can deliver more than you expect.",
      icon: "👨‍💻",
    },
    {
      title: "Agile methodologies",
      description: "Not only developers, but the approach we follow is also the best. We follow agile methodology to give you top-tier projects.",
      icon: "🔄",
    },
    {
      title: "Transparent communication",
      description: "Always stay in the loop with us and our developers.",
      icon: "🗣️",
    },
  ];

  return (
    <section className="wc-section-container">
    <div className="wc-section-heading-con">
    <h2 className="wc-section-heading">WHY CHOOSE US</h2>
    </div>
      <p className="wc-section-tagline">Why Partner with Us for Offshore Software Development?</p>
      <p className="wc-section-intro">
        Our proven strategies and skilled developers make us the best offshore development company for your next project.
      </p>
      
      <div className="wc-features-grid">
        {features.map((feature, index) => (
          <div className="wc-feature-card" key={index}>
            <div className="wc-feature-icon-wrapper">{feature.icon}</div>
            <h3 className="wc-feature-title">{feature.title}</h3>
            <p className="wc-feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;