import 'react-native';
import React from 'react';
import {ProviderRedux} from './ProviderRedux';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  const {getByText} = render(<ProviderRedux>Eu</ProviderRedux>);
  expect(getByText(/child element/i)).toBeInTheDocument();
});
