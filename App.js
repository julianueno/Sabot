 import 'react-native-gesture-handler';
 import Providers from './src/navigation/Providers';


 import React, {useEffect} from 'react';
 import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
 import Geolocation from '@react-native-community/geolocation';

 import Router from './src/navigation/root';
 
 navigator.geolocation = require('@react-native-community/geolocation');
 
 const App: () => Node = () => {
 
   const androidPermission = async () => {
     try {
       const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
         {
           title: "Sabot App Location Permission",
           message:
             "Sabot App needs access to your location ",
           buttonNeutral: "Ask Me Later",
           buttonNegative: "Cancel",
           buttonPositive: "OK"
         }
       );
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log("You can use the location");
       } else {
         console.log("Location permission denied");
       }
     } catch (err) {
       console.warn(err);
     }
   }
 
   useEffect(() => {
     if (Platform.OS === 'android') {
       androidPermission();
     } else {
       // IOS
       Geolocation.requestAuthorization();
     }
   }, [])
 
   return (
     <>
     <StatusBar barStyle="dark-content" />
     <Providers />
     </>
   );
 };
 
 
 export default App;