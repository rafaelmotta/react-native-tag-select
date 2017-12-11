import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TagSelect, TagSelectItem } from '../../src/components';

describe('<TagSelect />', () => {

  let wrapper;
  beforeEach(() => {
    const data = [
      { id: 1, label: 'Dinheiro' },
      { id: 2, label: 'Cheque' },
      { id: 3, label: 'Cartão de débito' },
      { id: 4, label: 'Cartão de crédito' },
      { id: 5, label: 'Pagamento online' },
    ]

    wrapper = shallow(<TagSelect data={data} />)
  });
  
  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders 5 children', () => {
    expect(wrapper.find('View').last().children()).toHaveLength(5);
  });

  it('renders empty list', () => {
    wrapper = shallow(
      <TagSelect data={[]} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders 0 children', () => {
    wrapper = shallow(
      <TagSelect data={[]} />,
    );

    expect(wrapper.find('View').last().children()).toHaveLength(0);
  });
})