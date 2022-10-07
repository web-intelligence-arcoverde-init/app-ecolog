import 'react-native';
import React from 'react';
import {CustomText} from './style';
import {render} from '@testing-library/react-native';
import {TypographyStyle} from '../../../common/';

const mockStyleFontSize = {
  fontWight: 700,
};

describe('Name of the group', () => {
  it('renders default correctly CustomText', () => {
    render(<CustomText>Eu</CustomText>);
  });

  it('renders default correctly CustomText ', () => {
    render(<CustomText {...TypographyStyle}>Eu</CustomText>);
  });

  it('renders default correctly CustomText ', () => {
    render(<CustomText {...mockStyleFontSize}>Eu</CustomText>);
  });
});
