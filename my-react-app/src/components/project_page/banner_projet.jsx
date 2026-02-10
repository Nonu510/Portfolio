import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = ({ image, title }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired, 
  title: PropTypes.string,            
};

export default Banner;

