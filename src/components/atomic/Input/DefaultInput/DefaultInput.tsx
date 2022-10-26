import React from 'react';
import {Input, Container} from './style';
import {COLORS} from '../../../../common/colors';

export const DefaultInput = ({
  text,
  secureTextEntry,
  multiline,
  numberOfLines,
  onChangeText,
}: any) => {
  return (
    <Container multiline={multiline}>
      <Input
        onChangeText={text => onChangeText(text)}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor={COLORS['gray-300']}
        placeholder={text}
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#a9dcc1',
          shadowColor: '#a9dcc1',
          shadowOffset: {
            width: 0,
            height: -0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Container>
  );
};
