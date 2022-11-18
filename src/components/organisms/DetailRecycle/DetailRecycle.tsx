import React from 'react';

import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {Typography, Input, Separator} from '../../';
import {scale, getPlatform} from '../../../utils';

export const DetailRecycle = ({onChange}: any) => {
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

          <Input
            placeholder="(00) 0 0000-0000"
            multiline={false}
            onChangeText={text => onChange('contato', text)}
          />

          <Separator height={16} />

          <Input
            placeholder="Informações adicionais"
            multiline={true}
            onChangeText={text => onChange('detalhes', text)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
