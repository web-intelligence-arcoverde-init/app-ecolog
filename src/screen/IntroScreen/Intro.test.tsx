import 'react-native';
import React from 'react';
import {IntroScreen} from './Intro';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<IntroScreen />);
});
