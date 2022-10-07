import 'react-native';
import React from 'react';
import {Button} from './Button';
import {render, fireEvent} from '@testing-library/react-native';

import {testId} from './testId';

describe('render Button', () => {
  it('should ', () => {
    render(
      <Button onPress={() => {}} color={'black'}>
        Eu
      </Button>,
    );
  });

  it('should ', () => {
    render(
      <Button
        onPress={() => {}}
        color={'black'}
        icon="github"
        iconColor="black">
        Porque?
      </Button>,
    );
  });

  it('should ', () => {
    render(
      <Button
        onPress={() => {}}
        color={'black'}
        icon="github"
        iconColor="black"
        outlined>
        Porque?
      </Button>,
    );
  });

  it('should ', () => {
    render(
      <Button
        onPress={() => {}}
        color={'black'}
        icon="github"
        iconColor="black"
        background="black">
        Porque?
      </Button>,
    );
  });

  it('should onPress Event ', async () => {
    const onEventMock = jest.fn();
    const {getByTestId} = render(
      <Button
        onPress={onEventMock}
        color={'black'}
        icon="github"
        iconColor="black">
        Eu
      </Button>,
    );

    const onPressContainer = getByTestId(testId.outlined_button);

    fireEvent.press(onPressContainer);

    expect(onEventMock).toBe;
  });
});
