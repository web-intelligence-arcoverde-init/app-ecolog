import React from 'react';

import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {Typography, Input, Separator} from '../../';
import {scale, getPlatform} from '../../../utils';

export const DetailRecycle = () => {
  return (
    <KeyboardAvoidingView
      style={{height: '100%'}}
      keyboardVerticalOffset={scale(-210)}
      behavior={'padding'}>
      <ScrollView>
        <View
          style={{
            marginTop: getPlatform() === 'ios' ? scale(54) : scale(24),
            padding: scale(18),
          }}>
          <Typography color="black-200">
            Precisamos de mais informações
          </Typography>
          <Separator height={8} />
          <Typography color="black-200" variant="body">
            Precisamos de informações
          </Typography>

          <Separator height={16} />

          <Input label="Contato" multiline={false} />

          <Separator height={16} />

          <Input label="Detalhes sobre" multiline={true} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
