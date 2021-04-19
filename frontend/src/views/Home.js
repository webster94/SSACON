import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home() {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button title={'근로자'} />
        <Button title={'관리자'} />
      </View>
    </View>
  );
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
