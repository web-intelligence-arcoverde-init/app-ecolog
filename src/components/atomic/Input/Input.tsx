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
}

export const Input = ({
  mask,
  maskType,
  error,
  label,
  multiline,
  numberOfLines,
}: InputProps) => {
  return (
    <>
      {label && (
        <Typography variant="body" color="gray-900">
          {label}
        </Typography>
      )}
      <Separator height={8} />
      {mask ? (
        <InputMask mask={maskType} />
      ) : (
        <DefaultInput multiline={multiline} numberOfLines={numberOfLines} />
      )}
      {!!error && <Typography variant="button">Error message</Typography>}
    </>
  );
};
