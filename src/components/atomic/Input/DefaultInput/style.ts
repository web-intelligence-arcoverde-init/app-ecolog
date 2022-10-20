import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

export const Container = styled.View`
  width: 100%;
  height: ${({multiline}) => (multiline ? '116px' : '58px')};
  display: flex;
  flex-direction: row;
  border-radius: 22px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${({multiline}) => (multiline ? '116px' : '58px')};
  background: ${COLORS['gray-600']};
  color: ${COLORS['gray-600']};
  border-radius: 22px;
  padding: 20px;
  font-size: 16px;
`;
