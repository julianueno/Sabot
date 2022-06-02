import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
      },
      button: {
        backgroundColor: '#ff6347',
        width: '30%',
        height: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      text: {
            color: 'black',
            fontSize: 15,
            marginTop: 10,
            fontWeight: '600',
            textAlign: 'center',
            textAlignVertical: 'center'
      }
});

export default styles;