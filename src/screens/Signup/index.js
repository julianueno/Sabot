// SignUp.js
import React from 'react'
import {  View,  Button, Text,  TextInput} from 'react-native'
import styles from './styles.js';

import auth from '@react-native-firebase/auth';
import createUserDocument from '../../authentication'
import firestore from "@react-native-firebase/firestore"

class MyPay extends React.Component {
  state = {
    username: '', password: '', email: ''
  }  
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  addUser = async () => {
    const { email, password, username } = this.state;
      firestore().collection('users').child.add({
        username,
        email
      })
    }    

    signUp = async (e) => {
        e.preventDefault();
        const { email, password, username } = this.state;
        try {
          const { user } = await auth().createUserWithEmailAndPassword(
            email,
            password
          )
          then(newUser => {
            firestore().collection('users').child(newUser.uid).add({
              username: username, 
              email: email
            });
          })
        this.addUser ()
        } catch (error) {
          console.log('error', error);
        }
        this.setState({ username: '', email: '', password: '' });
      };

  render() {
    const { username, email, password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}
export default MyPay; 
 


