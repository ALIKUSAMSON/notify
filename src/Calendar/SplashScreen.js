import React from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>   
      <Text style={styles.text}>NOTIFY ME!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#03a9f4'
  },
    image:{
    width:250,
    height:200,
    alignSelf:'center',
    marginTop: 50,
  },
  text:{
      fontSize:30,
      color:'white',
      fontWeight: 'bold',
  }
}
);
