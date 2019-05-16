import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }){
  const quoteslist = quotes.map((quote, i) => (
    <li key={i}>
      <Quote character={quote.character} image={quote.image} quote={quote.quote}/>
    </li>
  ));

  return (
    <ul>
      {quoteslist}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Quotes;
