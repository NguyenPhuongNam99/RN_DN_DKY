
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import FrontSize from './Component/FrontSize';
// import Color from './Component/Color';
import Office from './Office';
import Success from './Component/Success';
import Screen3 from './Component/Screen3';
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Office">
      <Stack.Screen name="Office" component={Office} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}  />

    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
