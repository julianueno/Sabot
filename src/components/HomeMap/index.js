import React, {useState, useEffect, useRef, useCallback} from "react";
import {View, Image, Text, Pressable, Dimensions, TouchableOpacity, Alert} from "react-native";

import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView from "react-native-map-clustering";
import GeoLocation from "react-native-geolocation-service";
import {useNavigation} from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

import {hasPermission} from '../../hooks/LocationPermission';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

import RaidsData from '../../assets/data/raids';
import AccidentsData from '../../assets/data/accidents';

import styles from './styles.js';

const HomeMap = (props) => {

  const currentDriverId = auth().currentUser.uid;
  // Ref for interval 
  const interval = useRef(null);

  // Initialize navigation hook
  const navigation = useNavigation();

  // Assign markers according to category

  const [currentCategory, setCurrentCategory]= React.useState({});
  
  const onCategoryClick = category => {
    setCurrentCategory(category);
  }
  
  const getMarkers = () => {
    switch (currentCategory) {
      case 'Other Riders': return fetchTrips ();
      case 'Raids': return <RaidsData/>;
      case 'Accidents': return  <AccidentsData/>;
      case 'All': return [<AccidentsData/>, <RaidsData/>, fetchTrips () ];
      default: return [<AccidentsData/>, <RaidsData/>, fetchTrips ()];
    }
  } ;

  const HeaderButton = (props) => (
    <TouchableOpacity
      style={{
        backgroundColor: props.currentCategory === props.text ? "#fa706e" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginLeft: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => onCategoryClick (props.text)}
    >
      <Text
        style={{
          color: props.currentCategory === props.text ? "white" : "black",
          fontFamily: "Lexend-Regular",
          fontWeight: "300",
          fontSize: 12,
          lineHeight: 16,
          height: 16,
          }}
      >
        {props.text}
      </Text>
      </TouchableOpacity>
  );

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

  useEffect(() => {
    let isMounted = true;
    navigation.addListener('focus', event => {
      interval.current = setInterval(() => getLocation(), 60000);
      getLocation();
    })
    return () => clearInterval(interval.current)
  }, [navigation]
  );

  // useEffect triggered whenever the screen is out of focus
  useEffect(() => {
    let isMounted = true;
    navigation.addListener('blur', event => {
      clearInterval(interval.current);
      interval.current = null;
    });
    return () => { isMounted = false }
  }, [navigation]);

  //useEffect triggered to write location after position is initialized
  useEffect(() =>  {
    let isMounted = true;
    if (position!=null){
      const lat = position.coords.latitude
      const long = position.coords.longitude
    firestore().collection('drivers').doc(currentDriverId).collection('trips').add({
      location: new firestore.GeoPoint(lat, long),
      createdAt: firestore.FieldValue.serverTimestamp()
    })
    firestore().collection('drivers').doc(currentDriverId).update({
      location: new firestore.GeoPoint(lat, long),
      updatedAt: firestore.FieldValue.serverTimestamp()
    })
    };
    return () => { isMounted = false }
    }, [position]) 

  // alert for Option of accident or Raid
  const FormAlert = () =>

  Alert.alert(
      "Notify",
      "What would you like to Notify?",
      [
        {
          text: "Cancel",
          onPress: () => navigation.navigate('Home'),
        },
        { text: "Raid", onPress: () => navigation.navigate('ReportRaid')},
        {
          text: "Accident",
          onPress: () =>  navigation.navigate('ReportAccident'),
        },
      ]
    );        
  
    function renderRandomMarkers(n) {
      const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion;
      return new Array(n).fill().map((x, i) => (
        <Marker
          key={i}
          coordinate={{
            latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
            longitude: longitude + (Math.random() - 0.5) * longitudeDelta
          }}
        />
      ));
    }

    const initialRegion= {
        latitude: position?.coords.latitude || 51.455088,
        longitude: position?.coords.longitude ||-0.039669,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    };
  
    const [trips, setTrips] = useState ([]);

    useEffect(() => {
      const response= firestore()
      .collection("drivers")
      .where('active',"==",true)
      .onSnapshot(docs => {
      let trips = []
      docs.forEach(doc => {
        trips.push(doc.data())
      })
      setTrips (trips)
      console.log (trips)
      })
    },[position])

    const fetchTrips = () => {
      return trips.map ((trip,index) => (
        <Marker
         key={trip.id}
         coordinate={{ latitude : trip.location.latitude, longitude : trip.location.longitude }}>
      </Marker>
        ))
    }
    

  return (
  <View style={{height: windowHeight/1.3}}>
    <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        radius="50"
        clusterColor='#fa706e'
      region={initialRegion}    >
    {getMarkers()}
    
    </MapView>
    <View style={styles.filtercontainer}>
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text={"All"}
        btnColor="#fa706e"
        textColor="white"
        currentCategory={currentCategory}
        onCategoryClick={props.category}/>
      <HeaderButton
          text="Other Riders"
          btnColor="white"
          textColor="black"
          currentCategory={currentCategory}
          onCategoryClick={props.category}/>
      <HeaderButton
          text="Raids"
          btnColor="white"
          textColor="black"
          currentCategory={currentCategory}
        onCategoryClick={props.category}/>
      <HeaderButton
          text="Accidents"
          btnColor="white"
          textColor="black"
          currentCategory={currentCategory}
        onCategoryClick={props.category}/>
    </View>
    </View>
    <Pressable onPress={FormAlert} style={styles.buttonForms}>
        <Text style={styles.title}>Notify</Text>
    </Pressable>
    </View>
            
  )};

export default HomeMap;
