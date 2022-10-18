import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

export const Container = styled.View`
  width: 100%;
  height: ${({multiline}) => (multiline ? '116px' : '58px')};
  display: flex;
  flex-direction: row;
  border-radius: 12px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${({multiline}) => (multiline ? '116px' : '58px')};
  background: ${COLORS['gray-300']};
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  font-size: 16px;
`;
