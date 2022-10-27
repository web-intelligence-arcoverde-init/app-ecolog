import styled from 'styled-components/native';

import {COLORS} from '../../../common';
import {scale} from '../../../utils';

interface RecyclingItemTypeProps {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<RecyclingItemTypeProps>`
  background-color: ${({selected}) =>
    selected ? COLORS['green-400'] : COLORS['white-100']};
  border-radius: 6px;
  border-color: ${COLORS['black-100']};
  shadow-color: ${COLORS['black-100']};
  height: ${scale(80)}px;
  width: ${scale(80)}px;
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-radius: 1px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  height: ${scale(38).toFixed()}px;
  width: ${scale(38).toFixed()}px;
`;
