import 'react-native';
import React from 'react';
import {SplashScreen} from './SplashScreen';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByTestId} = render(<SplashScreen />);
  expect(getByTestId('container-lottie-animation'));
});
