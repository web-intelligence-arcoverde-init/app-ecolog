import 'react-native';
import React from 'react';
import {DefaultInput} from './DefaultInput';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  render(<DefaultInput text="Event" type={'text'} secureTextEntry={'qdq'} />);
});
