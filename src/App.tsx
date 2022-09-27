import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routers/router';

export const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
