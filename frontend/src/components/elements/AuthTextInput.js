import React from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

export default function AuthTextInput({
  text,
  width,
  height,
  size,
  setFunction,
  secureTextEntry,
  autoFocus,
  value,
  keyboardType,
  marginBottom,
  marginRight,
}) {
  return (
    <TextInput
      style={[
        styles.textInput,
        {
          width: width,
          height: height,
          fontSize: size,
          marginBottom: marginBottom,
          marginRight: marginRight,
        },
      ]}
      secureTextEntry={secureTextEntry}
      placeholder={text}
      autoFocus={autoFocus}
      keyboardType={keyboardType}
      onChangeText={value =>
        setFunction
          ? setFunction(value)
          : alert('onChangeText에 State 함수를 내려주세요!')
      }
      value={value}
      placeholderTextColor="#ffffff"
      inlineImageLeft="lock"
    />
  );
}
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'grey',
    borderRadius: 14,
    elevation: 7,
    paddingLeft: wp('3%'),
    paddingVertical: wp('3%'),
    color: '#ffffff',
  },
});
