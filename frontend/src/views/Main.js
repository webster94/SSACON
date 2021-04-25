import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button, Text, ImageBackground} from 'react-native';
import Header from '../components/elements/Header';
import BackgroundAbsolute from '../components/elements/BackgroundAbsolute';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Layout from '../components/elements/Layout';
import BasicButton from '../components/elements/BasicButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Main({navigation}) {
  const imageSrc = require('../assets/tempbackground2.png');

  return(
    <BackgroundAbsolute imageSrc={imageSrc}>
    <Header back="true"/>
    <View style={styles.buttonContainer}>
    <BasicButton style={styles.bottomButton}
    customFontSize={hp('8%')}
    borderRadius={wp('10%')}
    btnHeight={wp('20%')}
    btnWidth={wp('20%')}
    onHandlePress={() => {
    }}
    backgroundColor={'#555555'}>
    <FontAwesome5
      style={styles.arrowIcon}
      name={'chevron-up'}
      color="black"
      onHandlePress={() => {
        navigation.navigate('Home')
      }}/>
     </BasicButton>
     </View>
    </BackgroundAbsolute>
  )
};

const styles = StyleSheet.create({
  logoImage: {
    width: wp('20%'),
    height: hp('20%'),
    resizeMode: 'contain',
    marginBottom: hp('10%'),
  },
  buttonContainer: {
    flex: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    top: hp('85%'),
    opacity:0.3,
  },
  arrowIcon: {
    position: 'absolute',
    color: 'blue',
    fontSize: hp('8%'),
  },
  bottomButton: {
    position: 'absolute',
  },
});
