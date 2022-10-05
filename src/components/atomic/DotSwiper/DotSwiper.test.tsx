import 'react-native';
import React from 'react';
import {DotSwiper} from './DotSwiper';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  const {getByText, debug} = render(<DotSwiper active={false} />);
  debug;
  expect(getByText(/child element/i)).toBeInTheDocument();
});
