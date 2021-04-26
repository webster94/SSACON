import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AuthTitle from '../components/elements/AuthTitle';
import Header from '../components/elements/Header';
const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

export default function CheckAttandance() {
  const [time, setTime] = useState(null);
  const [state, changestate] = useState(false);
  const [attandanceTime, setAttandanceTime] = useState(0);
  const DoAttandance = function () {
    changestate(!state);
    setAttandanceTime(time);
  };
  useEffect(() => {
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + KR_TIME_DIFF).toLocaleString();
    setTimeout(() => {
      setTime(kr_curr);
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Header back={true} />
      {state ? (
        <>
          <AuthTitle
            title={'출결이 확인되었습니다.'}
            size={hp('5%')}
            color={'blue'}
          />
          <Text style={styles.text}>{attandanceTime}</Text>
        </>
      ) : (
        <AuthTitle
          title={'출석 체크를 하세요.'}
          size={hp('5%')}
          color={'blue'}
        />
      )}
      <Button
        onPress={() => {
          DoAttandance();
        }}
        title={'출석하기'}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp('3%'),
  },
});
