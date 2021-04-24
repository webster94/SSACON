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
import AuthTextInput from '../components/elements/AuthTextInput';
export default function Login({navigation}) {
  const imageSrc = require('../assets/Background.jpg');
  return (
    <BackgroundAbsolute imageSrc={imageSrc}>
      <Header></Header>
      <Layout width={wp('70%')} height={hp('70%')} opacity={0.1}>
        <Text style={styles.text}>로그인</Text>
        <View style={styles.view}>
          <AuthTextInput
            width={wp('60%')}
            height={hp('6%')}
            text={'아이디'}
            size={hp('2%')}
          />
          <AuthTextInput
            width={wp('60%')}
            height={hp('6%')}
            text={'비밀번호'}
            size={hp('2%')}
          />
          <BasicButton
            text={'로그인'}
            customFontSize={hp('2.5%')}
            btnWidth={wp('60%')}
            btnHeight={hp('6%')}
            onHandlePress={() => {
              navigation.navigate('List');
            }}
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
    flex: 1,
    // position: 'absolute',
    // top: hp('10%'),
    marginTop: hp('10%'),
    fontSize: hp('5%'),
    color: 'white',
  },
  view: {
    flex: 8,
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
});
