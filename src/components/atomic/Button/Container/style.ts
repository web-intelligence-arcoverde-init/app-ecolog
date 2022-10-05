import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';
import {scale} from '../../../../utils';

export const HEIGHT_BUTTON = scale(48);
export const BORDER_RADIUS_BUTTON = scale(14);
export const FONT_SIZE_TEXT_BUTTON = scale(14);
export const LINE_HEIGHT_TEXT_BUTTON = scale(14);

interface ButtonProps {}

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${HEIGHT_BUTTON}px;
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `${COLORS.green}`};
  border-radius: ${BORDER_RADIUS_BUTTON}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: ${FONT_SIZE_TEXT_BUTTON}px;
  line-height: ${LINE_HEIGHT_TEXT_BUTTON}px;
  color: ${COLORS.white};
`;
