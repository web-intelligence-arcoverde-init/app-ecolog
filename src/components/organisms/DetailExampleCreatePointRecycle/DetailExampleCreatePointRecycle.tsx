import React from 'react';

import {View, Image} from 'react-native';
import {Typography} from '../..';
import MapLocation from '../../../assets/icons/mapa.png';

export const DetailExampleCreatePointRecycle = () => {
  return (
    <View style={{marginTop: 38, padding: 24}}>
      <Typography variant="h2">Nós informe a locazação no mapa</Typography>
      <Typography variant="button">
        Para finalizar você será redicionado para o mapa toque no lugar onde
        você quer posicionar o ponto de coleta
      </Typography>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 32}}>
        <Image source={MapLocation} style={{height: 160, width: 160}} />
        <View style={{marginTop: 16}} />
      </View>
    </View>
  );
};
