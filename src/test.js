function renderRandomMarkers(n) {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion;
    return new Array(n).fill().map((x, i) => (
      <Marker
        key={i}
        coordinate={{
          latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
          longitude: longitude + (Math.random() - 0.5) * longitudeDelta
        }}
      />
    ));
  }
  class MyPay extends Component {

    render () {
    return(
        <View>
            <Header/>
            <Space/>
            <NavBar/>

            <Image
                source={require('../../assets/images/period.png')}
                style= {{width: 280, height: 100, right: -50, resizeMode:'cover'}}
            /> 
            <Image
                source={require('../../assets/images/mypay.png')}
                style= {{width: 300, height: 400, right: -50, marginTop: 10, resizeMode:'cover'}}
            />               
        </View>
        );
    }
}


export default MyPay;

