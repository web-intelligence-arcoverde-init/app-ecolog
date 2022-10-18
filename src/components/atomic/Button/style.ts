import styled from 'styled-components/native';

import {HEIGHT_BUTTON, BORDER_RADIUS_BUTTON} from './constants';

import {COLORS} from '../../../common';

interface ContainerTouchableProps {
  outlined?: boolean;
  background?: string;
}

export const Container = styled.TouchableOpacity<ContainerTouchableProps>`
  width: 100%;
  height: ${HEIGHT_BUTTON}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({outlined}) =>
    outlined ? `1px solid ${COLORS['gray-300']};` : 'none'};
  border-radius: ${BORDER_RADIUS_BUTTON}px;
  background-color: ${({outlined, background}) =>
    colorBackground(outlined, background)};
`;

const colorBackground = (outlined: any, background: any) => {
  if (!outlined) {
    return background ? COLORS[background] : COLORS['green-400'];
  }

  return 'transparent';
};
