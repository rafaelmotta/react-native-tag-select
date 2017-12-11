import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TagSelectItem, { styles } from '../../src/components/TagSelectItem';

describe('<TagSelectItem />', () => {
  let wrapper;
  let props = { onPress: jest.fn(), label: 'Lorem' };;

  beforeEach(() => {
    wrapper = shallow(<TagSelectItem {...props} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('shound render a label element', () => {
    expect(wrapper.find('Text').contains('Lorem')).toBe(true);
  });

  it('correctly responds to presses', () => {
    wrapper.find('TouchableOpacity').props().onPress()
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('shound have a selected style', () => {
    wrapper = shallow(<TagSelectItem {...props} selected={true} />);
    expect(wrapper.find('View').last().props().style[1]).toEqual(styles.innerSelected);
  });

})
