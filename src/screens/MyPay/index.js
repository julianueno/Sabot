
import React, {UseState, useEffect} from 'react'
import {  View,  Button, Text,  TextInput} from 'react-native'
import styles from './styles.js';

import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import Header from '../../components/Header';

class MyPay extends React.Component {
  state = {
    username: '', password: '', email: ''
  }  
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = async (e) => {
        e.preventDefault();
        const { email, password, username } = this.state;
        try {
          const { user } = await auth().createUserWithEmailAndPassword(
            email,
            password
          )
        console.log(user.uid);
        }
        catch (error) {
          console.log('error', error);
        }
        this.setState({ username: '', email: '', password: '' });
        
        useEffect (() =>  {
          firestore().collection('users').set(user)
         }, [user]) 
      };
       

  render() {
    const { username, email, password } = this.state;
    return (
      <View style= {styles.container}>
        <Header/>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={val => this.onChangeText('username', val)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={val => this.onChangeText('password', val)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={val => this.onChangeText('email', val)}
        />
        </View>
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>

    )
  }
}
export default MyPay; 
