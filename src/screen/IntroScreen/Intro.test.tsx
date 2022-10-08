import 'react-native';
import React from 'react';
import {IntroScreen} from './Intro';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  render(<IntroScreen />);
});
