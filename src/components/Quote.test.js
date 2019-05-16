import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('quote componenttttttt', () => {
  it('renders one quoteeeeeeeeeeee', () => {
    const wrapper = shallow(<Quote character={''} quote={''} image={''}/>);
    expect(wrapper).toMatchSnapshot();
  });   
});
