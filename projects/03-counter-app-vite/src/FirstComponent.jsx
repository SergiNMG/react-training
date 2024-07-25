import PropTypes from "prop-types";

export const FirstComponent = ({ title, subTitle }) => {
  return (
    <>
      <h1>Esto es una prop:</h1>
      <p>{title}</p>
      <p>{subTitle + 1}</p>
    </>
  );
};

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
};
