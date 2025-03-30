
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
// import Carousel from './components/Carousel';
// import Marquee from './components/Marquee';
// import WhoWeAre from './components/WhoWeAre';
// import SuccessStory from './components/SuccessStoy';
// import WhyChooseUs from './components/WhyChooseUs';
// import TechStackMarquee from './components/TechStack';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function Home() {
//   const successStories = [
//     {
//       id: 1,
//       category: "Web Development",
//       description: "E-commerce Platform: Built a scalable React/Node.js solution that increased conversions by 40%",
//       imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       link: "#"
//     },
//     {
//       id: 2,
//       category: "Cloud Migration",
//       description: "Healthcare SaaS: Migrated legacy systems to AWS, reducing costs by 35% while improving reliability",
//       imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       link: "#"
//     },
//     {
//       id: 3,
//       category: "Web Application",
//       description: "FinTech Dashboard: Created real-time analytics with React and WebSocket integration",
//       imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       link: "#"
//     }
//   ];
  

//   return (
//     <>
//       <Nav />
//       <Carousel />
//       <Marquee />
//       <WhoWeAre />
//       <Services />
//       <WhyChooseUs />
//       <TechStackMarquee />
//       <SuccessStory props={successStories} title='Client Success Stories' />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<><Nav /><Contact /><Footer /></>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Marquee from './components/Marquee';
import WhoWeAre from './components/WhoWeAre';
import SuccessStory from './components/SuccessStoy';
import WhyChooseUs from './components/WhyChooseUs';
import TechStackMarquee from './components/TechStack';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  const successStories = [
    {
      id: 1,
      category: "Web Development",
      description: "E-commerce Platform: Built a scalable React/Node.js solution that increased conversions by 40%",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      id: 2,
      category: "Cloud Migration",
      description: "Healthcare SaaS: Migrated legacy systems to AWS, reducing costs by 35% while improving reliability",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      id: 3,
      category: "Web Application",
      description: "FinTech Dashboard: Created real-time analytics with React and WebSocket integration",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    }
  ];

  return (
    <>
      <Nav />
      <Carousel />
      <Marquee />
      <WhoWeAre />
      <Services />
      <WhyChooseUs />
      <TechStackMarquee />
      <SuccessStory props={successStories} title='Client Success Stories' />
      <Footer />
    </>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before using localStorage
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem('hasSeenPopup', 'true');
      
      // Set timeout to auto-hide after 10 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      {/* Popup Component */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>×</button>
            <h1>Technology</h1>
            <h2>Partner Google Cloud</h2>
            <h1>Stay a While!</h1>
            <p><strong>Thinking about enhancing your digital footprint?</strong></p>
            <p>Let us show you how our digital services can drive your success.</p>
            <a href='/contact'><button className="consultation-btn">Book a Free Consultation</button></a>
          </div>
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<><Nav /><Contact /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
