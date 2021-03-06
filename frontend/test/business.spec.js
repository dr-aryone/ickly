import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Business from '../app/components/business';

describe('<Business />', () => {
  it('should render the name of the selected business', () => {
    const props = {
      business: {name: 'restaurant'}
    }
    const wrapper = mount(<Business {...props} />)
    const name = wrapper.find('h4')
    expect(name.text()).to.equal('restaurant')
  });
});
