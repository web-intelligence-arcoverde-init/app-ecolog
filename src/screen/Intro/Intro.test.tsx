import 'react-native';
import React from 'react';
import {Intro} from './Intro';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Intro />);
});
