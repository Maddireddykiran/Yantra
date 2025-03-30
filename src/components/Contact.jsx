// import React, { useState } from 'react';
// import { FaCalendarAlt, FaUsers, FaUserTie, FaUniversity, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaRocket, FaSatellite } from 'react-icons/fa';
// import { GiSpaceship, GiArtificialIntelligence } from 'react-icons/gi';
// import "../styles/Contact/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     country: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="page-container">
//       <div className="pixel-crayons-container">
//         <div className="left-section">
//           <div className="company-header">
//             <h1>Yantra<span className="tm">™</span></h1>
//             <p className="trusted-by">Trusted by startups and Fortune 500 companies</p>
//           </div>

//           <div className="stats-container">
//             <div className="stat-item">
//               <div className="stat-icon">
//                 <FaCalendarAlt size={24} />
//               </div>
//               <div>
//                 <h3>20+ years of experience</h3>
//                 <p>We can handle projects of all complexities.</p>
//               </div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-icon">
//                 <FaUsers size={24} />
//               </div>
//               <div>
//                 <h3>2500+ satisfied customers</h3>
//                 <p>Startups to Fortune 500, we have worked with all.</p>
//               </div>
//             </div>
//             <div className="stat-item">
//               <div className="stat-icon">
//                 <FaUserTie size={24} />
//               </div>
//               <div>
//                 <h3>675+ in-house team</h3>
//                 <p>Top 1% industry talent to ensure your digital success.</p>
//               </div>
//             </div>
//           </div>

//           <div className="clients-section">
//             <p className="clients-label">Our Clients</p>
//             <div className="client-logos">
//               <span><FaUniversity size={20} /> University</span>
//               <span>Panasonic</span>
//               <span>Yale</span>
//             </div>
//           </div>

//           <div className="tech-animations">
//             <div className="ufo-animation">
//               <div className="ufo"><GiSpaceship size={32} /></div>
//               <div className="light-beam"></div>
//               <div className="stars">
//                 {[...Array(20)].map((_, i) => (
//                   <div key={i} className="star" style={{
//                     top: `${Math.random() * 100}%`,
//                     left: `${Math.random() * 100}%`,
//                     animationDelay: `${Math.random() * 2}s`
//                   }}></div>
//                 ))}
//               </div>
//             </div>
//             <div className="floating-icons">
//               <div className="icon rocket"><FaRocket size={24} /></div>
//               <div className="icon satellite"><FaSatellite size={24} /></div>
//               <div className="icon ai"><GiArtificialIntelligence size={24} /></div>
//             </div>
//           </div>
//         </div>

//         <div className="right-section">
//           <div className="paper-animation-container">
//             {[...Array(8)].map((_, i) => (
//               <div 
//                 key={i} 
//                 className="paper-sheet"
//                 style={{
//                   left: `${10 + (i * 10)}%`,
//                   animationDelay: `${i * 0.5}s`,
//                   transform: `rotate(${i % 2 === 0 ? '-' : ''}${5 + (Math.random() * 10)}deg)`
//                 }}
//               ></div>
//             ))}
//           </div>
//           <div className="form-container">
//             <div className="form-header">
//               <h2>Get in Touch</h2>
//               <p>Receive tailored solutions, expert advice, and precise estimates.</p>
//               <div className="contact-options">
//                 <button className="contact-btn"><FaPhoneAlt /> Book A Call</button>
//                 <button className="contact-btn"><FaWhatsapp /> WhatsApp</button>
//                 <button className="contact-btn"><FaEnvelope /> Email us</button>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="name">Full Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number (Optional)</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="country">Country</label>
//                   <input
//                     type="text"
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="form-group full-width">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                 ></textarea>
//               </div>

//               <div className="form-footer">
//                 <div className="confidentiality">
//                   <span>100% Confidential</span>
//                   <span>We Sign NDA</span>
//                 </div>
//                 <button type="submit" className="submit-btn">Send Now</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaUserTie, FaUniversity, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaRocket, FaSatellite } from 'react-icons/fa';
import { GiSpaceship, GiArtificialIntelligence } from 'react-icons/gi';
import "../styles/Contact/Contact.css";
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new'
      });
      
      console.log('Form submitted with ID: ', docRef.id);
      setSubmitStatus({ success: true, message: 'Thank you! Your message has been sent.' });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form: ', error);
      setSubmitStatus({ success: false, message: 'Sorry, there was an error. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="pixel-crayons-container">
        <div className="left-section">
          <div className="company-header">
            <h1>Yantra<span className="tm">™</span></h1>
            <p className="trusted-by">Trusted by startups and Fortune 500 companies</p>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">
                <FaCalendarAlt size={24} />
              </div>
              <div>
                <h3>20+ years of experience</h3>
                <p>We can handle projects of all complexities.</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaUsers size={24} />
              </div>
              <div>
                <h3>2500+ satisfied customers</h3>
                <p>Startups to Fortune 500, we have worked with all.</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaUserTie size={24} />
              </div>
              <div>
                <h3>675+ in-house team</h3>
                <p>Top 1% industry talent to ensure your digital success.</p>
              </div>
            </div>
          </div>

          <div className="clients-section">
            <p className="clients-label">Our Clients</p>
            <div className="client-logos">
              <span><FaUniversity size={20} /> University</span>
              <span>Panasonic</span>
              <span>Yale</span>
            </div>
          </div>

          <div className="tech-animations">
            <div className="ufo-animation">
              <div className="ufo"><GiSpaceship size={32} /></div>
              <div className="light-beam"></div>
              <div className="stars">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="star" style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}></div>
                ))}
              </div>
            </div>
            <div className="floating-icons">
              <div className="icon rocket"><FaRocket size={24} /></div>
              <div className="icon satellite"><FaSatellite size={24} /></div>
              <div className="icon ai"><GiArtificialIntelligence size={24} /></div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="paper-animation-container">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="paper-sheet"
                style={{
                  left: `${10 + (i * 10)}%`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `rotate(${i % 2 === 0 ? '-' : ''}${5 + (Math.random() * 10)}deg)`
                }}
              ></div>
            ))}
          </div>
          <div className="form-container">
            <div className="form-header">
              <h2>Get in Touch</h2>
              <p>Receive tailored solutions, expert advice, and precise estimates.</p>
              <div className="contact-options">
                <button className="contact-btn"><FaPhoneAlt /> Book A Call</button>
                <button className="contact-btn"><FaWhatsapp /> WhatsApp</button>
                <button className="contact-btn"><FaEnvelope /> Email us</button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                <div className="confidentiality">
                  <span>100% Confidential</span>
                  <span>We Sign NDA</span>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Now'}
                </button>
                {submitStatus && (
                  <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;