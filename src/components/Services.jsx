
import React from 'react'
import SuccessStory from './SuccessStoy'
function Services() {
  const services = [
    {
      id: 1,
      category: "AI & Machine Learning",
      description: "We develop cutting-edge AI systems including NLP chatbots, computer vision, and predictive analytics that transform business operations. Our solutions have helped clients automate 60% of routine tasks while improving accuracy.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#ai-services",
    },
    {
      id: 2,
      category: "Cloud Transformation",
      title: "Enterprise Cloud Migration",
      description: "End-to-end cloud services from strategy to implementation. We've successfully migrated 200+ enterprise workloads to AWS/Azure with zero downtime, achieving 35% infrastructure cost savings on average.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#cloud-services",
    },
    {
      id: 3,
      category: "Web Development",
      description: "We build scalable web platforms using modern stacks (React, Node.js, Next.js) that drive engagement and conversions. Our e-commerce solutions have helped clients achieve up to 40% increase in conversion rates.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#web-development",

    },
    {
      id: 4,
      category: "Data Analytics",
      description: "Turn your data into decisions with our advanced analytics solutions. We implement real-time dashboards and predictive models that have helped clients improve decision-making speed by 60%.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#data-analytics",
    },
    {
      id: 5,
      category: "Cybersecurity",
      description: "Comprehensive security services from vulnerability assessments to SOC implementation. Our solutions have helped organizations reduce security risks by 90% while maintaining compliance.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#cybersecurity",
    }
  ];
  return (
    <>
    <SuccessStory props={services} title="Our Services"/>
    </>
  )
}

export default Services;