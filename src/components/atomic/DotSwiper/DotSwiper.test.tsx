import 'react-native';
import React from 'react';
import {DotSwiper} from './DotSwiper';
import {render} from '@testing-library/react-native';

describe('render DotSwiper', () => {
  it('renders correctly DotSwiper disable', () => {
    render(<DotSwiper active={false} />);
  });

  it('renders correctly DotSwiper active', () => {
    render(<DotSwiper active={true} />);
  });
});
