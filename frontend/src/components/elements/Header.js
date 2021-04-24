import React from 'react';
import {StyleSheet, View, Image, Button, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import ArrowButton from '../elements/ArrowButton';
export default function Header({back, onHandlePress}) {
  const SSafyURL = require('../../assets/ssafy.png');
  const SSAfy2URL = require('../../assets/SsafyLogo.png');
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {back ? (
        <ArrowButton
          onHandlePress={() =>
            onHandlePress ? onHandlePress() : navigation.goBack()
          }
        />
      ) : (
        <Image source={SSafyURL} style={styles.logo} />
      )}
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
