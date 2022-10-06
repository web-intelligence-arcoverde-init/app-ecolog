import styled from 'styled-components/native';

import {HEIGHT_BUTTON, BORDER_RADIUS_BUTTON} from '../constants';

import {COLORS} from '../../../../common';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${HEIGHT_BUTTON}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.secondaryGray};
  border-radius: ${BORDER_RADIUS_BUTTON}px;
`;
