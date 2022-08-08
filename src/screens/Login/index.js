import React, {UseState, useEffect} from 'react'
import {  View,  Button, Text,  TextInput, Image, SafeAreaView} from 'react-native'
import {auth, signInWithEmailAndPassword} from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';


export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onHandleLogin = () => {
      if (email !== "" && password !== "") {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => console.log("Login success"))
          .catch((err) => Alert.alert("Login error", err.message));
      }
    };
    
    return (
      <View style={styles.container}>
        <Image source={backImage} style={styles.backImage} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Log In</Text>
           <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
        </TouchableOpacity>
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }