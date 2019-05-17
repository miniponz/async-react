import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('character component', () => {
  it('renders one lonely character', () => {
    const wrapper = shallow(<Character species ={''} name={''} status={''} image={''}/>);
    expect(wrapper).toMatchSnapshot();
  });   
});
