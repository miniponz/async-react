
import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const charList = characters.map((character) => (
    <li key={character.name}>
      <Character name={character.name} status={character.status} species={character.species} image={character.image} />
    </li>
  ));

  return (
    <ul>
      {charList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Characters;
