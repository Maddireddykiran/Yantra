import React from "react";
import "../styles/WhoAreYou/WhoAreYou.css";
const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      <div className="content-section" data-aos="fade-right">
        <h2 className="section-title">Who We Are</h2>
        <h3 className="subtitle">Offshore Yantra Development Company for Your Tech Needs</h3>
        <p className="company-content">
          Yantra  is a custom offshore software development company headquartered in India. 
          We have the best AI-enabled developers who deliver high-quality results that exceed our client's 
          expectations.
        </p>
        <p className="company-content">
          We believe in a customer-first approach where all solutions are personalized to match the unique 
          needs of the client. Get in touch with us to discuss your requirements.
        </p>
        <div>
          <a href="/contact">  <button className="btn" type="button">Get a free Trail</button></a>
        </div>
      </div>
      
      <div className="image-stats-section">
        <div className="image-hover-container">
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Team working" 
              className="hover-image"
            />
            <div className="hover-content">
              <div className="hover-stat">250+</div>
              <div className="hover-title">Projects Successfully</div>
              <div className="hover-subtitle">Offshore development</div>
            </div>
          </div>
          
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Office space" 
              className="hover-image"
            />
            <div className="hover-content">
              <div className="hover-stat">150+</div>
              <div className="hover-title">Clients</div>
              <div className="hover-subtitle">Clients achieved</div>
            </div>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
            <div className="stat-number">12+</div>
            <div className="stat-title">Years</div>
            <div className="stat-subtitle">Of Experience</div>
          </div>
          
          <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
            <div className="stat-number">400+</div>
            <div className="stat-title">Developers</div>
            <div className="stat-subtitle">AI-enabled experts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;