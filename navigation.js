import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Welcome!" component={Home}/>
        <Stack.Screen name="write your story" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;