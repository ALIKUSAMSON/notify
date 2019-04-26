import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image,Button } from 'react-native';
import AppNavigator from'./AppNavigator';

export default class login extends React.Component {


  render() {
    return (
   

      <View style={styles.container}>

        <TextInput style={styles.inputBox} 
          underlineColorAnddroid='rgbd(0,0,0,0.5)'
          placeholder='your answer'
          placeholderTextColor='black'
          />

      <TouchableOpacity style={styles.buttons} onPress={()=>this.props.navigation.navigate('AppNavigator')}>
      <Text style={styles.submitbtn}>Next</Text>
      </TouchableOpacity>

    

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
  },
  pointtext:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:50,
    marginVertical:80,
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
},
  submitbtn:{
    color:'white',
    fontSize:15,
    fontWeight:'100',
    textAlign:'center',
    
  },
    buttons:{
    backgroundColor:'#1c313a',
    borderRadius:10,
    paddingVertical:5,
    marginVertical:8,
    width:70,
    height:35,
    textAlign:'center',
    alignSelf:'center',
    marginVertical:30,
  }

});


