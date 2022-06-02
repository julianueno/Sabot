import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "../screens/HomeScreen";
import Restaurants from "../screens/Restaurants";
import MyPay from "../screens/MyPay";

import {createStackNavigator} from "@react-navigation/stack"

const Stack=createStackNavigator();

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }} 
        >
        <Stack.Screen name={"Home"} component={HomeScreen}/>
        <Stack.Screen name={"Restaurants"} component={Restaurants}/>
       <Stack.Screen name={"MyPay"} component={MyPay}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;