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
          backgroundColor: '#fff',
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Container>
  );
};
