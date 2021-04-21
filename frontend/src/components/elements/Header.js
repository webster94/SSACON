import React from 'react';
import {StyleSheet, View, Image, Button, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Header() {
  const SSafyURL = require('../../assets/ssafy.png');
  const SSAfy2URL = require('../../assets/SsafyLogo.png');
  return (
    <View style={styles.header}>
      <Image source={SSafyURL} style={styles.logo} />
      <Image source={SSAfy2URL} style={styles.logo} />
    </View>
  );
}
const windowSize = Dimensions.get('window');
const windowWidth = windowSize.width;
const windowHeight = windowSize.height;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: hp('0.2%'),
    left: 0,
    paddingHorizontal: windowWidth * 0.015625,
  },
  logo: {
    width: wp('15%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
});
