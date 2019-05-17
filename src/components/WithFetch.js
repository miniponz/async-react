import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withFetch = (fetchFunction, initialState, key = 'results') => Comp => {
  class WithFetch extends Component {
    static propTypes = {
      page: PropTypes.string.isRequired
    }

    state = {
      results: initialState
    }

    fetch = () => {
      fetchFunction(this.props.page)
        .then(results => this.setState({ results }));
    }

    componentDidMount() {
      this.fetch();
    }

    componentDidUpdate(prevProps) {
      if(prevProps !== this.props.page) {
        this.fetch();
      }
    }

    render() {
      const { results } = this.state;
      const props = { [key]: results, ...this.props };
      return <Comp {...props} />;
    }
  }

  return WithFetch;
};
