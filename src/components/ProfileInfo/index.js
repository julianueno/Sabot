import React, {Component, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

import {AuthContext} from '../../navigation/AuthProvider';

const ProfileInfo = (props) => {
    const {user, logout} = useContext(AuthContext);

    const driver = firestore().collection("drivers").doc(auth().currentUser.uid).get().then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
    
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
      });

    return (
        <View style={styles.bigcontainer}>
        <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Text style={styles.title}>Name: </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Text style={styles.title}>Vehicle: </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Text style={styles.title}>Company:</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Text style={styles.title}>Email: </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBut} onPress={() => logout()}>
        <Text style={styles.title}>Logout </Text>
        </TouchableOpacity>
        </View>
    );
};

export default ProfileInfo;


const styles = StyleSheet.create ({
    container : {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        width: 250,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        bottom: 30,
        borderWidth: 1,
         
    },
    logoutBut : {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        bottom: 5,
        borderWidth: 1,
        backgroundColor: '#fa706e'
         
    },

    bigcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        paddingBottom: 50,

      },

    title: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5,
        fontFamily: "Lexend-Regular",
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
    },
});
 