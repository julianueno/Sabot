import React, {Component, useEffect, useState, useRef} from "react";
import {View, Dimensions, Text, TextInput, Image} from "react-native";
import firestore from "@react-native-firebase/firestore"
import {useIsMounted} from '../../hooks/useIsMounted';


import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

class RaidsData extends Component {
    state = {
        raids: []
        }
    constructor (props) {
        super (props);
        this.subscriber = 
        firestore()
        .collection("raids")
        .onSnapshot(docs => {
            let raids = []
            docs.forEach(doc => {
                raids.push(doc.data())
            })
            this.setState ({raids})
        })
    }
    componentDidMount() {
  
        // Changing the state after 2 sec
        // from the time when the component
        // is rendered
        setTimeout(() => {
          this.setState({ color: 'wheat' });
        }, 2000);
      }
    render () {
    return(
        <View>
        {this.state.raids.map ((raid,index) => (
        <Marker
        key={raid.id}
         coordinate={{ latitude : raid.location.latitude, longitude : raid.location.longitude }}>
              <Image
                  style={{width: 35, height: 35, resizeMode:'contain'}}
                  source={require('../../assets/images/controls.png')}
                  />
             </Marker>
        ))}
        </View>
    )}
}

export default RaidsData;
