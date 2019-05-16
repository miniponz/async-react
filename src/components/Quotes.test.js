import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('quote component', () => {
  it('renders quotes', () => {
    const wrapper = shallow(<Quote character={''} quote={''} image={''}/>);
    expect(wrapper).toMatchSnapshot();
  });   
});
