import {KeyboardAvoidingView, ScrollView} from 'react-native';

import {scale} from '../../../utils';

export const LayoutFormContainer = ({children}: any) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        display: 'flex',
      }}
      keyboardVerticalOffset={scale(-210)}
      behavior={'padding'}>
      <ScrollView style={{padding: scale(16)}}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};
