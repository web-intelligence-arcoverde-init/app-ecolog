import 'react-native';
import React from 'react';
import {IntroScreen} from './Intro';

import {renderWithProviders} from '../../store/configureStore';

it('renders correctly', () => {
  renderWithProviders(<IntroScreen />);
});
