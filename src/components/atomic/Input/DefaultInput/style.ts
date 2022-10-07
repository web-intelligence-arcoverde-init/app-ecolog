import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  background: ${COLORS.secondaryGray};
  color: #6c6c80;
  border-radius: 8px;
  padding-left: 16px;
`;
