import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen} from '../screen/SplashScreen/SplashScreen';
import {IntroScreen} from '../screen/IntroScreen/Intro';
import {IntroOptionScreen} from '../screen/IntroOptionScreen/IntroOptionScreen';

import {SignInScreen} from '../screen/SignInScreen/SignInScreen';
import {SignUpScreen} from '../screen/SignUpScreen/SignUpScreen';
import {RecoveryAccountScreen} from '../screen/RecoveryAccountScreen/RecoveryAccountScreen';

import {MapScreen} from '../screen/MapScreen/MapScreen';

import {CreatePointColletScreen} from '../screen/CreatePointColletScreen/CreatePointColletScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="IntroOptionScreen" component={IntroOptionScreen} />

      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="RecoveryAccountScreen"
        component={RecoveryAccountScreen}
      />

      <Stack.Screen name="MapScreen" component={MapScreen} />

      <Stack.Screen
        name="CreatePointColletScreen"
        component={CreatePointColletScreen}
      />
    </Stack.Navigator>
  );
}

export default App;
