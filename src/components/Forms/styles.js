import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
       marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
      button: {
        backgroundColor: '#fac3b9',
        width: '40%',
        height: 22,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 8,
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      text: {
            color: 'black',
            fontSize: 14,
            textAlign: 'center',
            textAlignVertical: 'center'
      }
});

export default styles;