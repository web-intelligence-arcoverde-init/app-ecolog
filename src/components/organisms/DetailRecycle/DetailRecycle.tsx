import React, {useEffect, useState} from 'react';

import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {useAppDispatch} from '../../../hooks/useReduxHooks';
import {Typography, Input, Separator} from '../../';
import {scale, getPlatform} from '../../../utils';
import {addPointCollectContact} from '../../../store/reducer/pointCollectRecycling';

export const DetailRecycle = () => {
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (contact && details) {
      dispatch(addPointCollectContact({phone: contact, datails: details}));
    }
  }, [contact, details]);

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
            label="Contato"
            multiline={false}
            onChangeText={text => setContact(text)}
          />

          <Separator height={16} />

          <Input
            label="Detalhes sobre"
            multiline={true}
            onChangeText={text => setDetails(text)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
