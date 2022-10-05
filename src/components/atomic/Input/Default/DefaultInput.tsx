import React from 'react';
import {Input, Container, TextError} from './style';
import {COLORS} from '../../../../common/colors';

export const DefaultInput = ({text, secureTextEntry, error, ...inputProps}) => {
  return (
    <Container>
      <Input
        placeholderTextColor={COLORS.silver}
        placeholder={text}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};
