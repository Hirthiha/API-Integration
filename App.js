import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Flatlist from './src/flatlist';
import Unique from './src/unique';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Flatlist}
          options={{title: 'News'}}
        />
        <Stack.Screen
          name="unic"
          component={Unique}
          options={{title: 'View News'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
