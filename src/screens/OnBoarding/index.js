import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnBoarding= ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            title: " ",
            backgroundColor: '#fa706e',
            image: <Image source={require('../../assets/images/logo.png')} style={{ height: 60, width: 140 }}/>,
            subtitle: 'Regain control over your data to inform your decisions' ,
        },
          {
            title: " ",
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/logo.png')} style={{ height: 60, width: 140 }}/>,
            subtitle: 'Connect with other riders',
          },
          {
            title: " ",
            backgroundColor: '#fa706e',
            image: <Image source={require('../../assets/images/logo.png')} style={{ height: 60, width: 140 }}/>,
            subtitle: "Ride the algorithm to your advantage",
          },
        ]}
      />
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});
