import React, {useState} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

export const TrashContainerType = ({source, label}: any) => {
  const [selectTypeTrash, setSelectTypeTrash] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setSelectTypeTrash(!selectTypeTrash)}
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: selectTypeTrash ? 1 : 0,
        borderColor: selectTypeTrash ? '#a9dcc1' : '#000',
        shadowColor: selectTypeTrash ? '#a9dcc1' : '#000',
        height: 100,
        width: 100,
        shadowOffset: {
          width: 0,
          height: -0,
        },
        shadowOpacity: 0.20000000149011612,
        shadowRadius: 1,
        marginBottom: 20,
        marginRight: 14,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={source} style={{width: 48, height: 48, marginBottom: 6}} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
