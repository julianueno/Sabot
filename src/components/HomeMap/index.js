import React, {UseState} from "react";
import {View, Image, Text, Pressable, Dimensions, TouchableOpacity} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import drivers from '../../assets/data/drivers';
import raids from '../../assets/data/raids';
import accidents from '../../assets/data/accidents';

import styles from './styles.js';

const HomeMap = (props) => {
 
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
      
      const showAccidents = accidents.map ((accident:{...}) => (
        <Marker
         key={accident.id}
         coordinate={{ latitude : accident.latitude, longitude : accident.longitude }}>
              <Image
                  style={{width: 35, height: 35, resizeMode:'contain'}}
                  source={getImage(accident.type)}
                  />
             </Marker>
     
         ));
      
         const showRaids = raids.map ((raid:{...}) => (
          <Marker
           key={raid.id}
           coordinate={{ latitude : raid.latitude, longitude : raid.longitude }}>
                <Image
                    style={{width: 35, height: 35, resizeMode:'contain'}}
                    source={getImage(raid.type)}
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
                case 'Raids': return showRaids;
                case 'Accidents': return showAccidents;
                case 'All': return [...showDrivers, ...showRaids, ...showAccidents];
                default: return [...showDrivers, ...showRaids, ...showAccidents];
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
                  fontWeight: "600",
                  fontSize: 12,
                  lineHeight: 16,
                  height: 16,
                  }}
              >
                {props.text}
              </Text>
            </TouchableOpacity>
          );

        return (
          <View style={{height: Dimensions.get('window').height -120}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                region={{
                latitude: 51.476926,
                longitude: -0.0334287,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
            }}
            >
            {getMarkers()}  
            </MapView>
            <View style={styles.filtercontainer}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <HeaderButton
                text="All"
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
            {/*
            <Pressable   
            onPress={() => onCategoryClick('All')} style={styles.buttonAll}>
            <Text style={styles.title}> All</Text>
            </Pressable>
            <Pressable  
            onPress={() => onCategoryClick('justRaids')} style={styles.buttonRaids}>
            <Text style={styles.title}> Raids</Text>
            </Pressable>
            <Pressable
             onPress={() =>  onCategoryClick('justAccidents')} style={styles.buttonAccidents}>
            <Text style={styles.title}> Accidents</Text>
            </Pressable>
            <Pressable 
            onPress={() =>  onCategoryClick('justDrivers')} style={styles.buttonDrivers}>
            <Text style={styles.title}> Other Riders</Text>
          </Pressable> */}
            </View>
            </View>
            
  )};

export default HomeMap;
