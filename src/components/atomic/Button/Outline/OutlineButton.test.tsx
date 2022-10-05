import 'react-native';
import React from 'react';
import {OutlineButton} from './OutlineButton';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  render(
    <OutlineButton onPress={() => {}} color={'black'} weight={12} size={12}>
      Eu
    </OutlineButton>,
  );
});
