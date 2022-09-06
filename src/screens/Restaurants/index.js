import React, {useState, useEffect} from "react";
import {View, Image, Text, Pressable} from "react-native";

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import firestore from "@react-native-firebase/firestore";

import styles from './styles.js';

const Restaurants = ({navigation}) => {

  const goToNewRestaurant= () =>{
    navigation.navigate('NewRestaurant')
  }
  const [state, setState] = useState({});

  const [restaurants, setRestaurants] = useState ([]);

  useEffect(() => {
   const response =
      firestore()
      .collection("restaurants")
      .onSnapshot(docs => {
          let restaurants = []
          docs.forEach(doc => {
              restaurants.push(doc.data())
          })
          setRestaurants (restaurants)
        })
    return () => {
          setState({});
        };
    },[])
  
    
  const RestaurantsData = () => {
      return restaurants.map ((restaurant,index) => (
      <Marker
       key={Math.random()*10000000}
       title={restaurant.name}
       coordinate={{ latitude : restaurant.location.latitude, longitude : restaurant.location.longitude }}
       onPress= {() =>{navigation.navigate("RestaurantProfile", {restid: restaurant.id, restname: restaurant.name})}}>
            <Text styles={styles.title}>
            {restaurant.name}
            </Text>
            <Image
                style={{width: 35, height: 35, resizeMode:'contain'}}
                source={require('../../assets/images/restaurant.png')}
                />
      </Marker>
      ))  
    }

      return (
          <View>
          <Header/>
          <View style={styles.inputBox}>
            <Text style={styles.titleSpace}>  Press on restuarant marker to access comments</Text>
            </View>
          <View style={{height: windowHeight/1.3}}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              showsUserLocation={true}
              initialRegion={{
              latitude: 51.48251,
              longitude: -0.07202,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
              }}>
          {RestaurantsData()}
          </MapView>
          </View>
          <Pressable style={styles.buttonForms} onPress={goToNewRestaurant}>
            <Text style={styles.title}>Add</Text>
            <Text style={styles.title}> restaurant</Text>
            </Pressable>
            <NavBar/>
          </View>
  );
}

export default Restaurants
