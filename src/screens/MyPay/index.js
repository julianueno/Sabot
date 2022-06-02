import React, {Component} from "react";
import {View, Dimensions, Text, TextInput} from "react-native";

import HomeMap from '../../components/HomeMap';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

import firestore from "@react-native-firebase/firestore"

class MyPay extends Component {
    state = {
        users: []
        }
    constructor (props) {
        super (props);
        this.subscriber = 
        firestore()
        .collection("users")
        .onSnapshot(docs => {
            let users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })
            this.setState ({users})
        })
    }

    render () {
    return(
        <View>
            <Logo/>
            {this.state.users.map((user,index) => 
            <View key= {index}><Text> {user.name} </Text>
            </View>)}
            <NavBar/>
        </View>
        );
    }
}

export default MyPay;