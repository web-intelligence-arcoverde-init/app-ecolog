import 'react-native';
import React from 'react';
import {Input} from './Input';
import {render} from '@testing-library/react-native';

describe('render Input', () => {
  it('should render the default input ', () => {
    render(<Input />);
  });

  it('should render the mask input', () => {
    render(<Input mask />);
  });

  it('should render the error message ', () => {
    render(<Input error="Errouuuu" />);
  });
});
