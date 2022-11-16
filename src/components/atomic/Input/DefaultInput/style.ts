import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

import {scale} from '../../../../utils';

interface ContainerProps {
  multiline?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 98%;
  height: ${({multiline}) => (multiline ? scale(116) : scale(48))}px;
  display: flex;
  flex-direction: row;
  border-radius: ${scale(22)}px;
`;

export const Input = styled.TextInput<ContainerProps>`
  width: 100%;
  height: ${({multiline}) => (multiline ? scale(116) : scale(48))}px;
  background: ${COLORS['white-100']};
  color: ${COLORS['gray-600']};
  border-radius: 22px;
  padding: 20px;
  font-size: 16px;
`;
