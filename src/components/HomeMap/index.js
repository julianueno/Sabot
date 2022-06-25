import React, {UseState, useEffect, useRef} from "react";
import {View, Image, Text, Pressable, Dimensions, TouchableOpacity, Alert} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GeoLocation from "react-native-geolocation-service";
import {useNavigation} from '@react-navigation/native';

import {hasPermission} from '../../hooks/LocationPermission';
import Message from '../../components/Message';

import drivers from '../../assets/data/drivers';
import RaidsData from '../../assets/data/raids';
import AccidentsData from '../../assets/data/accidents';

import styles from './styles.js';

const HomeMap = (props) => {

  // Ref for interval 
  const interval = useRef(null);

  // Initialize navigation hook
  const navigation = useNavigation();

    const getImage = (type) => {
        if (type === 'moto') {
          return require('../../assets/images/moto.png');
        }
        if (type === 'car') {
          return require('../../assets/images/car.png');
        }
        if (type === 'moto_deliveroo') {
          return require('../../assets/images/moto_deliveroo.png');
        }
        if (type === 'bike') {
          return require('../../assets/images/bike.png');
        }
        if (type === 'accident') {
          return require('../../assets/images/accident.png');
        }
        return require('../../assets/images/raid.png');
      };
      
      const showDrivers = drivers.map ((driver:{...}) => (
        <Marker
         key={driver.id}
         coordinate={{ latitude : driver.latitude, longitude : driver.longitude }}>
              <Image
                  style={{width: 35, height: 35, resizeMode:'contain'}}
                  source={getImage(driver.type)}
                  />
             </Marker>
         ));
      

           const [currentCategory, setCurrentCategory]= React.useState({});
           const onCategoryClick = category => {
             setCurrentCategory(category);
         }
          const getMarkers = () => {
            switch (currentCategory) {
                case 'Other Riders': return showDrivers;
                case 'Raids': return <RaidsData/>;
                case 'Accidents': return  <AccidentsData/>;
                case 'All': return [<AccidentsData/>, <RaidsData/>, showDrivers];
                default: return [<AccidentsData/>, <RaidsData/>, showDrivers];
            }
          };

          const HeaderButton = (props) => (
            <TouchableOpacity
              style={{
                backgroundColor: props.currentCategory === props.text ? "#00CCFF" : "white",
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
   
          // alert for Option of accident or Raid
          const FormAlert = () =>

          Alert.alert(
            "Report",
            "What would you like to Report?",
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
        
        return (
          <View style={{height: Dimensions.get('window').height -180}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
              region={{
                latitude: position?.coords.latitude || 51.475088,
                longitude: position?.coords.longitude ||-0.039669,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015, 
            }}                
            >
            {getMarkers()}  
            </MapView>
            <View style={styles.filtercontainer}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <HeaderButton
                text={"All"}
                btnColor="#00CCFF"
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
                <Text style={styles.title}>Report</Text>
            </Pressable>
            </View>
            
  )};

export default HomeMap;
