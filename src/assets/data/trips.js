import React, {Component} from "react";
import {View, Dimensions, Text, TextInput, Image} from "react-native";
import firestore from "@react-native-firebase/firestore"

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

class DriversData extends Component {
   
    state = {
        drivers: []
        }
    constructor (props) {
        super (props);
        this.subscriber = 
        firestore()
        .collection("drivers")
        .onSnapshot(docs => {
            let drivers = []
            docs.forEach(doc => {
                drivers.push(doc.data())
            })
            this.setState ({drivers})
        })
    }


    render () {
    return(
        <View>
        {this.state.drivers.map ((driver,index) => (
        <Marker
         key={driver.id}
         coordinate={{ latitude : driver.location.latitude, longitude : driver.location.longitude }}>
              <Image
                  style={{width: 35, height: 35, resizeMode:'contain'}}
                  source={require('../../assets/images/accident.png')}
                  />
             </Marker>
        ))}
        </View>
    )}
}


export default DriversData;