import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../components/elements/Logo';
import Layout from '../components/elements/Layout';
import BasicButton from '../components/elements/BasicButton';
export default function Home() {
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Layout width={wp('70%')} height={hp('70%')} opacity={0.2}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
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
