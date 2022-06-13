import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#d1cbcb',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        position: "absolute",
        width: 420,
        height: 70,
        padding: 5,
        top: '90%', //for center align
        alignSelf: 'center' //for align to right
      },
      button: {
        backgroundColor: '#d1cbcb',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 140,
        height: 49,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        
      },
      title: {
            color: '#1A1A1A',
            fontFamily: "Lexend-Regular",
            fontFamily: 'Lexend',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 13,
            lineHeight: 16,
            height: 16,

          }
});

export default styles;