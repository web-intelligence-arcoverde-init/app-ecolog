import 'react-native';
import React from 'react';
import {Typography} from './Typography';
import {render} from '@testing-library/react-native';
import {TypographyStyle} from '../../../common/';

describe('Name of the group', () => {
  it('renders default correctly Typography', () => {
    render(<Typography>Eu</Typography>);
  });

  it('renders default correctly Typography ', () => {
    render(<Typography {...TypographyStyle}>Eu</Typography>);
  });
});
