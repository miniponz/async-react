import React from 'react';
import { shallow } from 'enzyme';
import TopQuotes from './TopQuotes';

describe('colors list', () => {
  it('renders color list', () => {
    const wrapper = shallow(<TopQuotes />);
    expect(wrapper).toMatchSnapshot();
  });   
});
