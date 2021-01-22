import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";


import TabNavigator from './TabNavigator';
import {Main_Header, Profile_User} from './StackNavigation';
import DrawerContent from './Component/DrawerContent';
import Detail_Profile from './Component/Detail_Profile';
const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} options={{ drawerLabel: 'Homessss',headerStyle:{
          
      } }} />
      <Drawer.Screen name="Detail_Profile" component={Detail_Profile} />
    </Drawer.Navigator>
  );
}

export default DrawNavigation;