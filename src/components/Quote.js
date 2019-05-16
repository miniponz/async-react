import React from 'react';
import PropTypes from 'prop-types';

function Quote({ character, quote, image }) {
  return (
    <section>
      <h3>{character}</h3>
      <img src={image}></img>
      <p>{quote}</p>
    </section>
  );
}

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;

