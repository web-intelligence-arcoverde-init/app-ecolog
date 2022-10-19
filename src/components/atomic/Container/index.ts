import styled from 'styled-components/native';
import {COLORS} from '../../../common/colors';

import {scale} from '../../../utils';

interface ContainerProps {
  direction?: boolean;
  color?: string;
  justify?: string;
  align?: string;
  width?: number;
  height?: number;
  padding?: number;
}

export const StyledContainer = styled.View<ContainerProps>`
  flex-direction: ${({direction}) => (direction ? 'row' : 'column')};
  background-color: ${({color}) => (color ? `${COLORS[color]}` : '#fff')};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  width: ${({width}) => scale(width ? width : 100)}%;
  height: ${({height}) => scale(height ? height : 100)}%;
  padding: ${({padding}) => scale(padding ? padding : 0)}px;
`;

export const Container = styled.View<ContainerProps>`
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${({color}) => (color ? `${COLORS[color]}` : COLORS.white)};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  padding: ${({padding}) => (padding ? padding : '0')}px;
`;
