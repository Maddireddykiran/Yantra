import React from "react";
import PropTypes from "prop-types";
import "../styles/SuccessStory/SuccessStory.css";

const SuccessStory=({ props = [] ,title}) => {
  return (
    <section className="success-stories">
      <h2 className="success-stories__title">{title}</h2>
      <div className="success-stories__grid">
        {props.map((story, index) => (
          <article 
            className={`story-card ${index % 2 === 0 ? 'story-card--slide-in-left' : 'story-card--slide-in-right'}`} 
            key={story.id}
          >
            <div 
              className="story-card__image" 
              style={{ backgroundImage: `url(${story.imageUrl})` }} 
            />
            <div className="story-card__content">
              <span className="story-card__category">{story.category}</span>
              <span className="story-card__title" >{story.description}</span>
              <a href={story.link} className="story-card__link">Learn more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

// Prop type validation
SuccessStory.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SuccessStory;