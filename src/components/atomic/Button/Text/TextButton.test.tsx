import 'react-native';
import React from 'react';
import {TextButton} from './TextButton';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  render(<TextButton>Eu</TextButton>);
});
