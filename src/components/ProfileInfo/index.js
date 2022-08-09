import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

class ProfileInfo extends Component {

    state = {
        driver: 
            name: ""
            vehicle: ""
            company: "" 
            email: ""
        }
    constructor (props) {
        super (props);
        this.getUser();
        this.subscriber = 
            firestore()
  .collection('drivers')
  .doc(auth().currentUser.uid)
  .onSnapshot (docs => {
        this.setState ({
            driver:{
            name: doc.data().name
            company: doc.data().company
            vehicle: doc.data().vehicle
            }
        })
        });
    }
render () {
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.title}> Name: {this.state.driver.name}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}> Vehicle </Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}> Main Company </Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}> Email </Text>
        </View>

        <View style={styles.container}>
            <Text style={styles.title}> Erase account </Text>
        </View>
        </View>
    );
};

}
export default ProfileInfo;


const styles = StyleSheet.create ({
    container : {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        backgroundColor: "white",
        width: 250,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        bottom: 30,
         
    },

    title: {
        color: '#00CCFF',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5,
        fontFamily: "Lexend-Regular",
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
    },
});
 