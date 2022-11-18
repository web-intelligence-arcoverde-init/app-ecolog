import {KeyboardAvoidingView, ScrollView} from 'react-native';

import {scale} from '../../../utils';

export const FormContainer = ({children}: any) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      keyboardVerticalOffset={scale(-210)}
      behavior={'padding'}>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};
