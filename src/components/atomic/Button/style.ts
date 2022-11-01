import styled from 'styled-components/native';

import {HEIGHT_BUTTON, BORDER_RADIUS_BUTTON} from './constants';

import {COLORS} from '../../../common';

interface ContainerTouchableProps {
  outlined?: boolean;
  background?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity<ContainerTouchableProps>`
  width: 100%;
  height: ${HEIGHT_BUTTON}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({borderColor}) => `${borderColor}` || 'none'};
  border-radius: ${BORDER_RADIUS_BUTTON}px;
  background-color: ${({backgroundColor}) =>
    backgroundColor && backgroundColor};
`;
