import PropTypes from "prop-types";
import "./GifCard.scss";

export const GifCard = ({ title, text, image }) => {
  return (
    <>
      <div className="c-card">
        <img className="c-card__img" src={image} alt={text} />
        <p> {title} </p>
      </div>
    </>
  );
};

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
