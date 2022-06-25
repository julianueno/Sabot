import React, {Component} from "react";
import {View, Dimensions, Text, TextInput, Image} from "react-native";
import firestore from "@react-native-firebase/firestore"

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

class AccidentsData extends Component {
   
    state = {
        accidents: []
        }
    constructor (props) {
        super (props);
        this.subscriber = 
        firestore()
        .collection("accidents")
        .onSnapshot(docs => {
            let accidents = []
            docs.forEach(doc => {
                accidents.push(doc.data())
            })
            this.setState ({accidents})
        })
    }

    render () {
    return(
        <View>
        {this.state.accidents.map ((accident,index) => (
        <Marker
         key={accident.id}
         coordinate={{ latitude : accident.location.latitude, longitude : accident.location.longitude }}>
              <Image
                  style={{width: 35, height: 35, resizeMode:'contain'}}
                  source={require('../../assets/images/accident.png')}
                  />
             </Marker>
        ))}
        </View>
    )}
}

export default AccidentsData;
