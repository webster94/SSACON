import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Main() {
  return <View></View>;
}

const styles = StyleSheet.create({
  logoImage: {
    width: wp('20%'),
    height: hp('20%'),
    resizeMode: 'contain',
    marginBottom: hp('10%'),
  },
  buttonContainer: {
    height: hp('30%'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
