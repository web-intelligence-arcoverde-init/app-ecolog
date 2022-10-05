import 'react-native';
import React from 'react';
import {InputMask} from './InputMask';
import {render} from '@testing-library/react-native';

it('renders correctly Typography', () => {
  render(
    <InputMask
      text="Event"
      type={'text'}
      secureTextEntry={'qdq'}
      error={false}
    />,
  );
});
