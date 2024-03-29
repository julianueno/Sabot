import React, {UseState, useEffect, useRef} from "react";
import {View, Image, Text, Pressable, Dimensions, Alert} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';
import GeoLocation from "react-native-geolocation-service";
import {useNavigation} from '@react-navigation/native';

import {hasPermission} from '../../hooks/LocationPermission';
import firestore from "@react-native-firebase/firestore";
import {windowHeight, windowWidth} from '../../utils/Dimensions';


import styles from './styles.js';

const AccidentMap = (props) => {

  // Ref for interval 
  const interval = useRef(null);

  // Initialize navigation hook
  const navigation = useNavigation();

    // 4. Keeping track of position (lat and long)
    const [position, setPosition] = React.useState(null);

    // function to get current location of user
    const getLocation = async () => {
    const locationPermission = await hasPermission();
    if (!locationPermission) return;

    GeoLocation.getCurrentPosition(
        position => {
        setPosition(position);
        },
        error => {
        setPosition(null)
        },

        {
        accuracy: {
            android: 'high',
        },
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
        },
    );
    };

    // useEffect triggered whenever the screen is in focus
    useEffect(() => {
    navigation.addListener('focus', event => {
        interval.current = setInterval(() => getLocation(), 30000);
        getLocation();
    });

    return () => clearInterval(interval.current);
    }, [navigation]);

    // useEffect triggered whenever the screen is out of focus
    useEffect(() => {
    navigation.addListener('blur', event => {
        clearInterval(interval.current);
        interval.current = null;
    });
    }, [navigation]);

    const [pin, setPin] = React.useState ({
        latitude: position?.coords.latitude || 51.475088,
        longitude: position?.coords.longitude ||-0.039669,
    });

    const SubmitAlert = () =>
    Alert.alert(
        "Report Accident",
        "Are you sure?",
        [
          {
            text: "Cancel",
            onPress: () => navigation.navigate('Home'),
          },
          { text: "OK", onPress: () => addAccident ()},
        ]
    );

    const addAccident = async () => {
        const lat = pin.latitude
        const long = pin.longitude
        const docRef = await firestore().collection('accidents').add({
          location: new firestore.GeoPoint(lat, long),
          timestamp: firestore.FieldValue.serverTimestamp()
        })
        firestore().collection('accidents').doc(docRef.id).update({
        id: docRef.id
        })
        navigation.navigate('Home')
      }    

    return (
    <View style={{height: windowHeight/1.35}}>
    <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        region={{
        latitude: position?.coords.latitude || 51.475088,
        longitude: position?.coords.longitude ||-0.039669,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01, 
    }}                
    >
    <Marker
        coordinate = {{
            latitude: position?.coords.latitude || 51.475088,
            longitude: position?.coords.longitude ||-0.039669
            }}
        draggable = {true}
        onDragEnd={(e)=> {
        setPin ({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        });
        }}>
    <Image
        style={{width: 45, height: 45, resizeMode:'contain'}}
        source={require('../../assets/images/accident.png')}
    />
    </Marker> 
    </MapView>
    <Pressable onPress={SubmitAlert} style={styles.buttonSubmit}>
                <Text style={styles.title}>Submit</Text>
    </Pressable>
    </View>
);
};

export default AccidentMap;
