import styled from 'styled-components/native';

import {scale} from '../../../utils';

interface SeparatorProps {
  height: number;
  width: number;
}

export const Separator = styled.View<SeparatorProps>`
  height: ${({height}) => scale(height || 6)}px;
  width: ${({width}) => scale(width || 6)}px;
`;
