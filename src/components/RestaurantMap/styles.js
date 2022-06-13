import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },   
      bubble: {
        width: 300,
        height: 230,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#3B3838',
      },
      comment: {
        marginTop: 10,
        backgroundColor: 'white',
        width: 220, 
        height: 40, 
        textAlign: 'center',
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        right: -50,
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        textAlignVertical: 'center'
      },      
      newcomment: {
        backgroundColor: 'white',
        width: 220, 
        height: 20, 
        textAlign: 'center',
        color: '#cfcacb',
        fontSize: 12,
        fontWeight: '600',
        textAlignVertical: 'center',
        right: -20
      },
      button: {
        marginTop: 20,
        backgroundColor: '#ff6347',
        width: 45,
        height: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        right: -240,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "black"
      },
});

export default styles;