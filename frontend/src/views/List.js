import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../components/elements/Header';
import Layout from '../components/elements/Layout';
import BasicButton from '../components/elements/BasicButton';
import BackgroundAbsolute from '../components/elements/BackgroundAbsolute';
export default function List({navigation}) {
  const imageSrc = require('../assets/Background.jpg');

  return (
    <BackgroundAbsolute imageSrc={imageSrc}>
      <Layout width={wp('70%')} height={hp('70%')} opacity={0.1}>
        <View style={styles.buttonContainer}>
          <BasicButton
            text={'출석'}
            customFontSize={hp('3%')}
            btnWidth={wp('30%')}
            borderRadius={999}
            onHandlePress={() => {
              navigation.navigate('CheckAttandance');
            }}
          />
          <BasicButton
            text={'모니터'}
            customFontSize={hp('3%')}
            btnWidth={wp('30%')}
            borderRadius={999}
            onHandlePress={() => {
              navigation.navigate('Main');
            }}
          />
          <BasicButton
            text={'관리자'}
            customFontSize={hp('3%')}
            btnWidth={wp('30%')}
            borderRadius={999}
            onHandlePress={() => {
              navigation.navigate('EmployeeList');
            }}
          />
        </View>
      </Layout>
    </BackgroundAbsolute>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
