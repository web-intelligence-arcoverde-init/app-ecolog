import 'react-native';
import React from 'react';
import {ButtonContainer} from './ContainerButton';
import {render} from '@testing-library/react-native';

describe('render ContainerButton', () => {
  it('renders correctly ContainerButton', () => {
    render(
      <ButtonContainer
        children={undefined}
        onPress={undefined}
        background={undefined}
        disabled={undefined}
      />,
    );
  });
});
