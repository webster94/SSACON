import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/elements/Header';
import Layout from '../components/elements/Layout';
import BasicButton from '../components/elements/BasicButton';
import BackgroundAbsolute from '../components/elements/BackgroundAbsolute';
export default function Home() {
  const imageSrc = require('../assets/Background.jpg');
  return (
    <BackgroundAbsolute imageSrc={imageSrc}>
      <Header></Header>
      <Layout width={wp('70%')} height={hp('70%')} opacity={0.1}>
        <Text style={styles.text}>직종을 선택하세요</Text>
        <View style={styles.buttonContainer}>
          <BasicButton
            text={'근로자'}
            customFontSize={hp('3%')}
            btnWidth={wp('30%')}
          />
          <BasicButton
            text={'관리자'}
            customFontSize={hp('3%')}
            btnWidth={wp('30%')}
          />
        </View>
      </Layout>
    </BackgroundAbsolute>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: wp('40%'),
    height: hp('40%'),
  },
  text: {
    position: 'absolute',
    top: hp('10%'),
    marginTop: hp('10%'),
    fontSize: hp('3%'),
    color: 'white',
  },
});
