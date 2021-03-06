
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import Profile from './Component/Profile';
import Detail_Profile from './Component/Detail_Profile';

import {Main_Header, Profile_User} from './StackNavigation';
import DrawNavigation from './DrawNavigation';
import TabNavigator from './TabNavigator';
const App = ()=>{
  return (
      <NavigationContainer>
        <DrawNavigation />
      </NavigationContainer>
  )
}
const styles = StyleSheet.create({
 
});

export default App;
