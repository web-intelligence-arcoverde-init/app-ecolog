import React from 'react';

import {TextInputProps, View} from 'react-native';

import {InputMask} from './InputMask/InputMask';
import {DefaultInput} from './DefaultInput/DefaultInput';
import {Typography} from '../Typography/Typography';
import {Separator} from '../Separator/Separator';

interface Props extends TextInputProps {
  mask?: boolean;
  maskType?: string;
  error?: string;
}

export const Input = ({
  mask,
  maskType,
  error,
  multiline,
  numberOfLines,
  placeholder,
  onChangeText,
}: Props) => {
  return (
    <View style={{display: 'flex', alignItems: 'center', marginBottom: 24}}>
      {mask ? (
        <InputMask mask={maskType} />
      ) : (
        <DefaultInput
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
        />
      )}
      {!!error && <Typography variant="legend">Error message</Typography>}
    </View>
  );
};
