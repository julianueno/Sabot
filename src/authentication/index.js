import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firebase.firestore().doc(`users/${user.uid}`);
  
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const { username } = additionalData;
  
      try {
        await userRef.set({
          username,
          email,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };