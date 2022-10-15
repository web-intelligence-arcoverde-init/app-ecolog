import React, {useState} from 'react';
import {Input, Container} from './style';
import {COLORS} from '../../../../common/colors';

export const DefaultInput = ({
  text,
  secureTextEntry,
  multiline,
  numberOfLines,
  ...inputProps
}: any) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Container multiline={multiline}>
      <Input
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        placeholderTextColor={COLORS.silver}
        placeholder={text}
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: 'white',
          borderRadius: 6,
          borderWidth: onFocus && 1,
          borderColor: onFocus ? '#a9dcc1' : '#000',
          shadowColor: onFocus ? '#a9dcc1' : '#000',
          shadowOffset: {
            width: 0,
            height: -0,
          },
          shadowOpacity: 0.20000000149011612,
          shadowRadius: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...inputProps}
      />
    </Container>
  );
};
