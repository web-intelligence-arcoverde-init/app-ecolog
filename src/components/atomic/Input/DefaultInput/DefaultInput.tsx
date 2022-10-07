import React from 'react';
import {Input, Container} from './style';
import {COLORS} from '../../../../common/colors';

export const DefaultInput = ({
  text,
  secureTextEntry,

  ...inputProps
}: any) => {
  return (
    <Container>
      <Input
        placeholderTextColor={COLORS.silver}
        placeholder={text}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
    </Container>
  );
};
