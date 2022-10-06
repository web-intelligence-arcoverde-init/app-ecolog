import 'react-native';
import React from 'react';
import {OutlineButton} from './OutlineButton';
import {render} from '@testing-library/react-native';

describe('render Typography', () => {
  render(
    <OutlineButton onPress={() => {}} color={'black'}>
      Eu
    </OutlineButton>,
  );
});
