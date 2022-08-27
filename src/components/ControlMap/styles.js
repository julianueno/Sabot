import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      title: {
        fontFamily: "Lexend-Regular",
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 16,
        height: 16,
        color: "white",
      },   
      buttonSubmit: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        width: 80,
        height: 80,
        backgroundColor: "#fa706e",
        top: "80%",
        borderRadius: 80,
        elevation: 10,
      },

});

export default styles;
 
