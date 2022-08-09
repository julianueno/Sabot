import React from "react";
import {View, Image, Text} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

import styles from './styles.js';

const RestaurantMap = (props) => {

        return (
            <View style={{height: height: windowHeight/1.3}}>
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
            <Marker
                coordinate={{latitude: 51.4822073,longitude: -0.0675461}}>
                 <Image
                         style={{width: 40, height: 40, resizeMode:'contain'}}
                         source={require('../../assets/images/mcdonalds.png')}
                         />
                    </Marker>
            </MapView>
            </View>
    );
};

export default RestaurantMap;

                {/*<Callout>
                    <View style={styles.bubble}>
                    <Text>
                    <Image
                        style={{ height: 25, width:200 }}
                        source={require('../../assets/images/stars.png')}
                    />
                    </Text>    
                    <Text style={styles.comment}> Code to toilet: 0894  </Text>
                    <Text style={styles.comment}> Long waits for orders, especially in peak hours  </Text>          
                    <Text style={styles.button}> Add </Text>
                    <Text style={styles.newcomment}> New comment  </Text>                    
                    <Text>
                    <Image
                        style={{ height: 20, width:140 }}
                        source={require('../../assets/images/rate.png')}
                    />
                    </Text>              
                    </View>
            </Callout>*/}