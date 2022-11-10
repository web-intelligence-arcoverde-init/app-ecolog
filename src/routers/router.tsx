import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FakerScreen} from '../screen/FakerScreen/FakerScreen';

import {SplashScreen} from '../screen/SplashScreen/SplashScreen';
import {IntroScreen} from '../screen/IntroScreen/Intro';
import {OptionLoginScreen} from '../screen/OptionLoginScreen/OptionLoginScreen';

import {SignInScreen} from '../screen/SignInScreen/SignInScreen';

import {RecoveryAccountScreen} from '../screen/RecoveryAccountScreen/RecoveryAccountScreen';

import {MapScreen} from '../screen/MapScreen/MapScreen';

import {CreatePointColletScreen} from '../screen/CreatePointColletScreen/CreatePointColletScreen';

import {SignUpScreen} from '../screen/SignUpScreen/SignUpScreen';
import {SignUpScreenStep01} from '../screen/SignUpScreenStep01/SignUpScreenStep01';
import {SignUpScreenStep02} from '../screen/SignUpScreenStep02/SignUpScreenStep02';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FakerScreen" component={FakerScreen} />

      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="OptionLoginScreen" component={OptionLoginScreen} />

      <Stack.Screen name="SignInScreen" component={SignInScreen} />

      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignUpScreenStep01" component={SignUpScreenStep01} />
      <Stack.Screen name="SignUpScreenStep02" component={SignUpScreenStep02} />

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
