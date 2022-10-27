import React from 'react';

import {View, Image} from 'react-native';
import {Typography, Separator} from '../..';
import MapLocation from '../../../assets/images/mapa.png';

import {scale, getPlatform} from '../../../utils';

export const DetailExampleCreatePointRecycle = () => {
  return (
    <View
      style={{
        marginTop: getPlatform() === 'ios' ? scale(54) : scale(24),
        padding: scale(18),
      }}>
      <Typography color="black-200">Nós informe a locazação no mapa</Typography>
      <Separator height={8} />
      <Typography variant="body" color="black-200">
        Para finalizar você será redicionado para o mapa toque no lugar onde
        você quer posicionar o ponto de coleta
      </Typography>
      <Separator height={42} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={MapLocation} style={{height: 160, width: 160}} />
      </View>
    </View>
  );
};
