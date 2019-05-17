import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('characters component', () => {
  it('renders some characters', () => {
    const wrapper = shallow(<Characters characters={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });   
});
