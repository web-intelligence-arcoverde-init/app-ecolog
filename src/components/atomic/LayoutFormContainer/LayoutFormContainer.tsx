import {KeyboardAvoidingView, ScrollView} from 'react-native';

import {scale} from '../../../utils';

export const LayoutFormContainer = ({children}: any) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
      }}
      keyboardVerticalOffset={scale(-210)}
      behavior={'padding'}>
      <ScrollView style={{padding: scale(24)}}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};
