import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('colors list', () => {
  it('renders color list', () => {
    const wrapper = shallow(<Quote character={''} quote={''} image={''}/>);
    expect(wrapper).toMatchSnapshot();
  });   
});
