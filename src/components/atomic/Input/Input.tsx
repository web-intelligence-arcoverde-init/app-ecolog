import React from 'react';

import {InputMask} from './InputMask/InputMask';
import {DefaultInput} from './DefaultInput/DefaultInput';
import {Typography} from '../Typography/Typography';
import {View} from 'react-native';
import {Separator} from '../Separator/Separator';

interface InputProps {
  mask?: boolean;
  maskType?: string;
  error?: string;
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export const Input = ({
  mask,
  maskType,
  error,
  label,
  multiline,
  numberOfLines,
  placeholder,
  onChangeText,
}: InputProps) => {
  return (
    <>
      {label && (
        <Typography variant="body" color="black-300">
          {label}
        </Typography>
      )}
      <Separator height={4} />
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
      {!!error && <Typography variant="button">Error message</Typography>}
    </>
  );
};
