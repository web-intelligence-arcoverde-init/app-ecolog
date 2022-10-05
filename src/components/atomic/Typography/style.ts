import styled from 'styled-components/native';

interface TypographyProps {}

export const CustomText = styled.Text<TypographyProps>`
  font-size: ${({fontSize}) => (fontSize ? fontSize : '14')}px;
  color: ${({color}) => (color ? `${COLORS[color]}` : `${COLORS.black}`)};
  font-weight: ${({weight}) => (weight ? `${weight}` : 'normal')};
  font-family: 'Roboto';
`;
