import 'react-native';
import React from 'react';
import {Typography} from './Typography';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  render(<Typography>Eu</Typography>);
});
