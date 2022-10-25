import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Typography} from '../../';

export const TrashContainerType = ({
  item,
  setItemSelected,
  selectedItem,
}: any) => {
  return (
    <TouchableOpacity
      onPress={() => setItemSelected(item)}
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: selectedItem ? 1 : 0,
        borderColor: selectedItem ? '#a9dcc1' : '#000',
        shadowColor: selectedItem ? '#a9dcc1' : '#000',
        height: 100,
        width: 100,
        shadowOffset: {
          width: 0,
          height: -0,
        },
        shadowOpacity: 0.20000000149011612,
        shadowRadius: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={item.icon}
        style={{width: 48, height: 48, marginBottom: 6}}
      />
      <Typography variant="legend" color="black-300">
        {item.name}
      </Typography>
    </TouchableOpacity>
  );
};
