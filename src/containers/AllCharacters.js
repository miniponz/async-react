import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import getCharacters from '../services/getCharacters';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    page: 1,
    totalPages: ''
  }

  decrement = () => {
    if(this.state.page > 1) {
      this.setState(state => {
        return { page: state.page - 1 };
      });
    }
  }

  increment = () => {
    if(this.state.totalPages > this.state.page) {
      this.setState(state => {
        return { page: state.page + 1 };
      });
    }
  }

  componentDidMount() {
    getCharacters()
      .then(results => {
        this.setState({ characters: results.results });
        this.setState({ totalPages: results.info.pages });
      });
  }

  render() {
    const { characters, page } = this.state;
    return (
      <>
      <div style={ { display: 'flex', flexWrap: 'wrap', width: '100vw', justifyContent: 'center' } }>
        <button onClick={this.decrement}>Previous Page</button>
        <span>`${page} of `</span>
        <button onClick={this.increment}>Next Page</button>
      </div>
      <Characters characters={characters} />
      </>
    );
  }
}
