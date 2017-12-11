import 'react-native';
import 'react-native-mock';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

console.error = message => {
  if (
    message.indexOf('uppercase HTML') === -1 &&
    message.indexOf('spell it as lowercase') === -1 &&
    message.indexOf('cast the value') === -1
  ) {
    console.warn(message);
  }
};