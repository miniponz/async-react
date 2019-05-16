// import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { withFetch } from '../components/WithFetch';
import getCharacters from '../services/getCharacters';

export default withFetch(getCharacters, [], 'characters')(Characters);

// export default class AllCharacters extends PureComponent {
//   state = {
//     characters: []
//   }

//   componentDidMount() {
//     getCharacters()
//       .then(characters => this.setState({ characters }));
//   }

//   render() {
//     const { characters } = this.state;
//     return (
//       <Characters characters={characters} />
//     );
//   }
// }