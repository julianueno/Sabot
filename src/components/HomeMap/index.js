import React from "react";
import {View, Image, Text} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import drivers from '../../assets/data/drivers';

import styles from './styles.js';

const HomeMap = (props) => {

    const getImage = (type) => {
        if (type === 'moto') {
          return require('../../assets/images/moto.png');
        }
        if (type === 'car') {
          return require('../../assets/images/car.png');
        }
        return require('../../assets/images/bike.png');
      };

        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                region={{
                latitude: 51.48251,
                longitude: -0.07202,
                latitudeDelta: 0.0225,
                longitudeDelta: 0.0121,
            }}
            >
            {drivers.map ((driver:{...}) => (
               <Marker
                key={driver.id}
                coordinate={{ latitude : driver.latitude, longitude : driver.longitude }}>
                     <Image
                         style={{width: 35, height: 35, resizeMode:'contain'}}
                         source={getImage(driver.type)}
                         />
                    </Marker>
                ))}
            </MapView>
    );
};

export default HomeMap;