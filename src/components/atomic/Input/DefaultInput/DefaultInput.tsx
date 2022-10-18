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
        placeholderTextColor={COLORS['gray-300']}
        placeholder={text}
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          borderWidth: onFocus && 2,
          borderColor: onFocus ? '#a9dcc1' : '#000',
          shadowColor: onFocus ? '#a9dcc1' : '#000',
          shadowOffset: {
            width: 0,
            height: -0,
          },
          shadowOpacity: 0.20000000149011612,
          shadowRadius: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...inputProps}
      />
    </Container>
  );
};
