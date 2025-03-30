import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Carousel/carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const tl = useRef();

  const slides = [
    {
      title: "AI Solutions",
      description: "We build custom AI systems that automate processes, analyze data, and drive decision-making for your business.",
      buttonText: "Connect with expert teams",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Web Development",
      description: "Our team delivers high-performance websites and web applications tailored to your business requirements.",
      buttonText: "Connect with expert teams",
      bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Cloud Services",
      description: "We provide end-to-end cloud solutions including migration, optimization, and management across all major platforms.",
      buttonText: "Connect with expert teams",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our powerful analytics and visualization solutions.",
      buttonText: "Connect with expert teams",
      bgImage: "https://miro.medium.com/v2/resize:fit:1400/1*rQ3d_dKG7V2JhX8SrUjs6g.png"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security assessments and enterprise-grade protection services.",
      buttonText: "Connect with expert teams",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Initialize GSAP animations
  useEffect(() => {
    // Set initial positions
    gsap.set(slideRefs.current, {
      rotationY: 90,
      opacity: 0,
      transformPerspective: 1000,
      transformOrigin: "center center -500px"
    });
    
    // Animate the first slide in
    if (slideRefs.current[0]) {
      gsap.to(slideRefs.current[0], {
        rotationY: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToSlide((currentSlide + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    
    const direction = index > currentSlide ? 1 : -1;
    const current = slideRefs.current[currentSlide];
    const next = slideRefs.current[index];
    
    // Clear any existing animations
    tl.current && tl.current.kill();
    
    // Create new timeline
    tl.current = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(index);
      }
    });
    
    // Animate out current slide
    tl.current.to(current, {
      rotationY: -90 * direction,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in"
    }, 0);
    
    // Animate in next slide
    tl.current.fromTo(next, 
      {
        rotationY: 90 * direction,
        opacity: 0
      },
      {
        rotationY: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      0.2
    );
    
    // Pause autoplay temporarily
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="carousel-container">
      {/* Carousel Content */}
      <div className="carousel-track-container">
        <div className="carousel-track" ref={carouselRef}>
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="carousel-slide"
              ref={el => slideRefs.current[index] = el}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.bgImage})`
              }}
            >
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
               <a href='/contact'> <button className="slide-button">{slide.buttonText}</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls">
        <div className="indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;