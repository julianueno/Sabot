import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "../screens/HomeScreen";
import Restaurants from "../screens/Restaurants";
import MyPay from "../screens/MyPay";
import ReportAccident from "../screens/ReportAccident";
import ReportControl from "../screens/ReportControl";
import Profile from "../screens/Profile";
import About from "../screens/About";
import NewMyPay from "../screens/NewMyPay";
import NewRestaurant from "../screens/NewRestaurant";
import RestaurantProfile from "../screens/RestaurantProfile";

import {createStackNavigator} from "@react-navigation/stack"

const Stack=createStackNavigator();

const RootNavigator = (props) => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }} 
        >
        <Stack.Screen name={"Home"} component={HomeScreen}/>
        <Stack.Screen name={"Restaurants"} component={Restaurants}/>
        <Stack.Screen name={"MyPay"} component={MyPay}/>
        <Stack.Screen name={"ReportAccident"} component={ReportAccident}/>
        <Stack.Screen name={"ReportControl"} component={ReportControl}/>
        <Stack.Screen name={"Profile"} component={Profile}/>
        <Stack.Screen name={"About"} component={About}/>
        <Stack.Screen name={"NewMyPay"} component={NewMyPay}/>
        <Stack.Screen name={"NewRestaurant"} component={NewRestaurant}/>
        <Stack.Screen name={"RestaurantProfile"} component={RestaurantProfile}/>


      </Stack.Navigator>
  )
}

export default RootNavigator;
