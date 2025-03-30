import React from 'react';
import '../styles/TechStack/TechStack.css';

const TechStackMarquee = () => {
  const frontendItems = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ];

  const backendItems = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Ruby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  ];

  const devopsItems = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  ];

  const techStacks = [
    { name: "Frontend", items: frontendItems, direction: "normal" },
    { name: "Backend", items: backendItems, direction: "reverse" },
    { name: "DevOps", items: devopsItems, direction: "normal" }
  ];

  return (
    <section className="tech-stack-section">
      <div className="tech-header">
        <span className="tech-badge">TECH</span>
        <h2 className="tech-title">Our Tech Expertise</h2>
        <p className="tech-description">
          Our 400+ AI-enabled developers have expertise in all in-demand technologies and platforms. 
          From designing to testing, we have one of the best comprehensive tech stacks.
        </p>
      </div>
      
      <div className="tech-stack-container">
        {techStacks.map((stack, index) => (
          <div key={index} className="marquee-wrapper">
            <div className={`marquee marquee-${stack.direction}`}>
              {[...stack.items, ...stack.items].map((tech, i) => (
                <div key={`${tech.name}-${i}`} className="tech-item">
                  <div className="tech-logo-container">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="tech-logo"
                      loading="lazy"
                    />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackMarquee;