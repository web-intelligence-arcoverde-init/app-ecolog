import React from 'react';
import {Input, Container} from './style';
import {COLORS} from '../../../../common/colors';

export const DefaultInput = ({
  placeholder,
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
        placeholderTextColor={COLORS['gray-500']}
        placeholder={placeholder}
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
