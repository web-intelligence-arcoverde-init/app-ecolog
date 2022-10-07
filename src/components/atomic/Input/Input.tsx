import React from 'react';

import {InputMask} from './InputMask/InputMask';
import {DefaultInput} from './DefaultInput/DefaultInput';
import {Typography} from '../Typography/Typography';

interface InputProps {
  mask?: boolean;
  maskType?: string;
  error?: string;
}

export const Input = ({mask, maskType, error}: InputProps) => {
  return (
    <>
      {mask ? <InputMask mask={maskType} /> : <DefaultInput />}
      {!!error && <Typography variant="button">Error message</Typography>}
    </>
  );
};
