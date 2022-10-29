import {KeyboardAvoidingView, ScrollView} from 'react-native';

import {scale} from '../../../utils';

import {COLORS} from '../../../common';

export const FormContainer = ({children}: any) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: COLORS['white-100'],
      }}
      keyboardVerticalOffset={scale(-210)}
      behavior={'padding'}>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};
