import React from 'react';
import '../styles/footer/footer.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="links-container">
          <div className="links-grid">
            <div className="links-column">
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>In Media</li>
                <li>Case Studies</li>
                <li>Our Blog</li>
                <li>Testimonial & Clients</li>
              </ul>
            </div>
            
            <div className="links-column">
              <h3>Our Expertise</h3>
              <ul>
                <li>Software Product Engineering</li>
                <li>Application Development</li>
                <li>Staff Augmentation</li>
                <li>eCommerce Development</li>
                <li>Cloud Services</li>
                <li>AI & ML</li>
              </ul>
            </div>
            
            <div className="links-column">
              <h3>Hire Developers</h3>
              <ul>
                <li>Hire AI Engineers</li>
                <li>Hire Backend Developers</li>
                <li>Hire Frontend Developers</li>
                <li>Hire eCommerce Developers</li>
                <li>Hire Blockchain Developers</li>
                <li>Hire Mobile Developers</li>
              </ul>
            </div>
            
            <div className="links-column">
              <h3>Solutions</h3>
              <ul>
                <li>Offshore Development Center</li>
                <li>Offshore Software Development</li>
                <li>Nearshore Software Development</li>
              </ul>
            </div>
            
            <div className="links-column">
              <h3>Clients We Serve</h3>
              <ul>
                <li>For Startups</li>
                <li>For Enterprises</li>
                <li>For Agencies</li>
              </ul>
            </div>
          </div>
    
          {/* Contact Information Section */}
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>contact@valuecoders.com</span>
            </div>
          </div>
        </div>
      );
    };

export default Footer;