import React, {Component} from "react";
import {View, Dimensions, Text, TextInput, Image} from "react-native";

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Companies from '../../components/Companies';

import firestore from "@react-native-firebase/firestore"

class MyPay extends Component {

    render () {
    return(
        <View>
            <Header/>
            <Companies/>
            <NavBar/>
            {/*{this.state.users.map((user,index) => 
            <View key= {index}><Text> {user.name} </Text>
            </View>)}*/}
            <Image
                source={require('../../assets/images/period.png')}
                style= {{width: 280, height: 100, right: -50, resizeMode:'cover'}}
            /> 
            <Image
                source={require('../../assets/images/mypay.png')}
                style= {{width: 300, height: 400, right: -50, marginTop: 10, resizeMode:'cover'}}
            />               
        </View>
        );
    }
}


export default MyPay;
