import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";


import TabNavigator from './TabNavigator';
import {Main_Header, Profile_User} from './StackNavigation';
import DrawerContent from './Component/DrawerContent';
import Detail_Profile from './Component/Detail_Profile';
import Dangnhap from './Component/Dangnhap'
import Profile from './Component/Profile'
import Office from './Office'
const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} options={{ drawerLabel: 'Homessss',headerStyle:{
          
      } }} />
      <Drawer.Screen name="Detail_Profile" component={Detail_Profile} />
      <Drawer.Screen name="Dangnhap" component={Dangnhap} />
      <Drawer.Screen name="Office" component={Office} />

    </Drawer.Navigator>
  );
}

export default DrawNavigation;