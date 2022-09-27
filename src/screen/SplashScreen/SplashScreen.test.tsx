import 'react-native';
import React from 'react';
import {SplashScreen} from './SplashScreen';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<SplashScreen />);
});
