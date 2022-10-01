import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routers/router';
import {Provider} from 'react-redux';

import store from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
