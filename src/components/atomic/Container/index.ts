import styled from 'styled-components/native';
import {COLORS} from '../../../common/colors';

export const StyledContainer = styled.View`
  flex-direction: ${({direction}) => (direction ? 'row' : 'column')};
  background-color: ${({color}) => (color ? `${COLORS[color]}` : '#fff')};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  width: ${({width}) => (width ? width : '100')}%;
  height: ${({height}) => (height ? height : '100')}%;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${({color}) => (color ? `${COLORS[color]}` : COLORS.white)};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  padding: ${({padding}) => (padding ? padding : '0')}px;
`;
