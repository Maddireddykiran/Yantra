import React, { useEffect, useRef } from 'react';
import '../styles/Marquee/Marquee.css';

const Marquee = () => {
    // Sample startup logos (replace with actual image URLs)
    const startupLogos = [
      'https://logo.clearbit.com/airbnb.com',
      'https://logo.clearbit.com/uber.com',
      'https://logo.clearbit.com/stripe.com',
      'https://logo.clearbit.com/dropbox.com',
      'https://logo.clearbit.com/slack.com',
      'https://logo.clearbit.com/zoom.us',
      'https://logo.clearbit.com/spotify.com',
      'https://logo.clearbit.com/twitter.com',
      'https://logo.clearbit.com/instagram.com',
      'https://logo.clearbit.com/reddit.com',
    ];
  
    // Duplicate the array to create seamless looping
    const duplicatedLogos = [...startupLogos, ...startupLogos];
  
    return (
      <div className="marquee-container">
        <h2 className="marquee-title">Trusted by innovative startups worldwide</h2>
        <div className="marquee">
          <div className="marquee-content">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img 
                  src={logo} 
                  alt={`Startup logo ${index}`}
                  className="company-logo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/180x80?text=Startup';
                    e.target.className = 'company-logo placeholder-logo';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default  Marquee;