import React from 'react';
import {TextInputMask} from 'react-native-masked-text';

import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 48px;
  background: ${COLORS['gray-300']};
  color: ${COLORS['gray-300']};
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  align-items: flex-end;
`;

export const InputMask = ({
  type,
  text,
  secureTextEntry,
  error,
  ...inputProps
}: any) => {
  return (
    <Container>
      <TextInputMask
        style={{
          width: '100%',
          height: '100%',
          color: `#6C6C80`,
        }}
        placeholder={text}
        type={'cel-phone'}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
    </Container>
  );
};
