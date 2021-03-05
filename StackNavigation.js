
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
  StatusBar,TouchableOpacity,Image
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
import Dangnhap from './Component/Dangnhap';
import Draw_Deatil_Profile from './Component/Draw_Deatil_Profile';
import DrawerContent from './Component/DrawerContent';
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row',backgroundColor:'red',marginLeft:11}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};


const Stack = createStackNavigator();
const Main_Header = ({navigation}) => { 
  return (
   
    <Stack.Navigator initialRouteName="Office"  screenOptions={{
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#FFFFFF', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    }}>
      <Stack.Screen name="Office" component={Office} options={{title:''}}/>
      <Stack.Screen name="Success" component={Success} options={{title:'Submit Success',
      headerStyle:{
        backgroundColor:'#FFFFFF'
      }
    }}/>
      <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}  />

    </Stack.Navigator>
  );
};


const Profile_User = ({navigation}) => {

  return (
    <Stack.Navigator  s>
      
      <Stack.Screen name="Detail_Profile" component={Detail_Profile} options={{headerLeft:null,title:'Cá Nhân',headerTitleStyle:{
          fontSize:17,
          fontWeight:'bold',
          fontStyle:'normal'
      }}} />
      <Stack.Screen name="Profile" component={Profile} />
       <Stack.Screen name ="Dangnhap" component={Dangnhap} options={{headerLeft:null}}/>
       <Stack.Screen name ="Draw_Deatil_Profile" component={Draw_Deatil_Profile}/>
       <Stack.Screen name ="DrawerContent" component={DrawerContent}/>
       <Stack.Screen name ="Office" component={Office}/>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
 
});


export { Main_Header, Profile_User };
