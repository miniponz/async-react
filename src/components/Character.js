import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, image }) {
  return (
    <section>
      <h3>{name}</h3>
      <img src={image}></img>
      <p>{status}</p>
      <p>{species}</p>
    </section>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
