import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Typography, Separator} from '../../';

import {scale} from '../../../utils';

export const CustomButton = ({icon, message}: any) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d8d8dc',
        shadowColor: '#d8d8dc',
        height: scale(48),
        width: '100%',
        shadowOffset: {
          width: 0,
          height: -0,
        },
        shadowOpacity: 0.30000000149011612,
        shadowRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {icon}
      <Separator width={12} />
      <Typography variant="legend" color="gray-600">
        {message}
      </Typography>
    </TouchableOpacity>
  );
};
