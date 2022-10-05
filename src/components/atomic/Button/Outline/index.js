import React from 'react';
import {Label} from '../../Label';
import styled from 'styled-components/native';

import {
  HEIGHT_BUTTON,
  BORDER_RADIUS_BUTTON,
  FONT_SIZE_TEXT_BUTTON,
  LINE_HEIGHT_TEXT_BUTTON,
} from '../Contained/style';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${HEIGHT_BUTTON}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f5;
  border-radius: ${BORDER_RADIUS_BUTTON}px;
`;

const Index = ({children, onPress, color, weight, size}) => {
  return (
    <Container onPress={() => onPress()}>
      <Label color={color} weight={weight} size={size}>
        {children}
      </Label>
    </Container>
  );
};

export default Index;
