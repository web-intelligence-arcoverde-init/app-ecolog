import React from 'react';
import {TextInputMask} from 'react-native-masked-text';
import {TextError} from '../Default/style';

import styled from 'styled-components/native';
import {COLORS} from '../../../../common/colors';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 56px;
  background: ${COLORS.secondaryGray};
  color: ${COLORS.silver};
  border-radius: 8px;
  padding-left: 16px;
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
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};
