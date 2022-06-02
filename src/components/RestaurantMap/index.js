import React from "react";
import {View, Image, Text} from "react-native";

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './styles.js';

const RestaurantMap = (props) => {

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
                }}>
            </MapView>
    );
};

export default RestaurantMap;