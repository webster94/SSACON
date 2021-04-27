import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Image,Text, View, Alert, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/elements/Header';
const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

export default function PersonClicked() {
  const Person = require('../assets/Background.jpg');
  const Call = require('../assets/Phone.jpg');
  const FaceCall = require('../assets/FaceTalk.png');  

  return (
    <View style={styles.container}>
      <Header back={true} />
      <View style={styles.content}>
        <Image style={styles.Person__img} source={Person}/>
        <Text style={styles.Person__name}>이싸피</Text>
        <View style={styles.Person__descs}>
          <Text style={styles.Person__desc}>user ID</Text>
          <Text style={styles.Person__desc}>device ID</Text>
          <Text style={styles.Person__desc}>현재위치</Text>
          <Text style={styles.Person__desc}>last signal</Text>
        </View>
        <View style={styles.Buttons}>
          
          <Image 
            style={styles.Button} 
            source={Call} 
            onHandlePress={() => {
              console.log('통화');
            }}/>
          <Image 
            style={styles.Button} 
            source={FaceCall}
            onHandlePress={() => {
              console.log('영상통화');
            }}
          />        
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#505050',
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems:'center',
  },
  content: {
    backgroundColor:'black',
    width: wp('80%'),
    height:hp('80%'),
    borderRadius: 10,
  },
  Person__img: {
    width:wp('45%'),
    height:wp('45%'),
    borderRadius:100,
    marginTop:50,
    alignSelf:'center',
  }, 
  Person__name: {
    fontSize: wp('7%'),
    color:'white',
    textAlign:'center',
    marginTop:30,
  },
  Person__descs: {
    marginTop:20,
  },
  Person__desc: {
    color: 'white',
    fontSize: wp('7%'),
    marginLeft:wp('7%'),
    marginTop:5,
  },
  Buttons: {
    display:'flex',
    flexDirection:'row',    
    justifyContent:'space-evenly',
    marginTop:30,
  },
  Button: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius:50,
    marginTop:30,
  }
});