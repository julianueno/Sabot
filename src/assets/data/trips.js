import React, {Component} from "react";
import {View, Dimensions, Text, TextInput, Image} from "react-native";
import firestore from "@react-native-firebase/firestore"

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';


const getImage = (type) => {
    if (type === 'motouber') {
        return require('../../assets/images/motouber.png');
      }
      if (type === 'carstuart') {
        return require('../../assets/images/carstuart.png');
      }
      if (type === 'motodeliveroo') {
        return require('../../assets/images/motodeliveroo.png');
      }
      if (type === 'bikedeliveroo') {
        return require('../../assets/images/bikedeliveroo.png');
      }
    };  

class TripsData extends Component {
   
    state = {
        drivers: []
        }
        constructor (props) {
            super (props);
            this.subscriber = 
            firestore()
            .collection("drivers")
            .where('active',"==",true)
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
                  source={getImage(driver.vehicle+driver.company)}
                  />
             </Marker>
        )
        )}
        </View>
    )}
}


export default TripsData;