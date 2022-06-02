import firebase from 'react-native-firebase';

{/*
export function addLocation (location, addComplete){
    firebase.firestore()
    .collection('Drivers').
    add({
        name: location.id,
        latitude: location.latitude,
        longitude: location.longitude,
        createdAt: firesbase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) =Z console.log(error));
}
*/}

export async function getLocation (locationsRetrieved){

    var locationList= [];

    var snapshot = await firestore.firestore()
    .collection('Drivers').
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        locationList.push(doc.data());
    });

    locationsRetrieved (locationList);
}

