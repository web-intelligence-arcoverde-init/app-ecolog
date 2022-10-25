import React, {useState} from 'react';

import {View} from 'react-native';
import {Typography, Separator} from '../../';

import {TrashType} from '../../../assets/icons';

import {TrashContainerType} from '../TrashContainerType/TrashContainerType';
import {scale} from '../../../utils';

const mockTypeRecyclePoint = [
  {id: 1, name: 'Plastico', icon: TrashType.plastic},
  {id: 2, name: 'Tecido', icon: TrashType.cloth},
  {id: 3, name: 'Eletronico', icon: TrashType.eletronic},
  {id: 4, name: 'Vidro', icon: TrashType.glass},
  {id: 5, name: 'Metal', icon: TrashType.metals},
  {id: 6, name: 'Papel', icon: TrashType.paper},
];

export const DetailTrash = () => {
  const [itemSelected, setItemSelected] = useState({});

  return (
    <View style={{alignContent: 'center', padding: scale(24)}}>
      <Separator height={16} />

      <Typography color="black-200">Escolha um item</Typography>
      <Separator height={8} />

      <Typography color="black-200" variant="body">
        Selecione um dos items para reciclagem
      </Typography>

      <Separator height={16} />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {mockTypeRecyclePoint.map(item => {
          return (
            <TrashContainerType
              item={item}
              setItemSelected={setItemSelected}
              selectedItem={itemSelected?.id === item.id}
            />
          );
        })}
      </View>
    </View>
  );
};
