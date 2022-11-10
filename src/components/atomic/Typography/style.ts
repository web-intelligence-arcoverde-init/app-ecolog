import styled from 'styled-components/native';
import {COLORS} from '../../../common/';

const colorsType = typeof COLORS;

interface StyleTypographyProps {
  fontSize?: number;
  color?: typeof colorsType;
  weight?: string | number;
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: string;
}

export const CustomText = styled.Text<StyleTypographyProps>`
  font-size: ${({fontSize}) => (fontSize ? fontSize : '14')}px;
  color: ${({color}) => {
    console.log(COLORS[color], 'cores');
    return color ? `#000` : `${COLORS['black-100']}`;
  }};
  line-height: ${({lineHeight}) => (lineHeight ? `${lineHeight}` : '14')}px;
  letter-spacing: 1px;
  font-family: ${({fontFamily}) =>
    fontFamily ? `${fontFamily}` : 'Roboto-Regular'};

  text-align: ${({textAlign}) => (textAlign ? `${textAlign}` : 'auto')};
`;
