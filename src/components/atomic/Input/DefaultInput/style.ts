import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

export const Container = styled.View`
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 58px;
  background: ${COLORS.secondaryGray};
  color: #6c6c80;
  border-radius: 6px;
  padding-left: 20px;
`;
