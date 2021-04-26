import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const height = dimensions.height;

export default function AuthTitle({title, size, color, marginBottom}) {
  return (
    <View style={[styles.container, {marginBottom: marginBottom}]}>
      <Text
        style={[
          styles.text,
          {fontSize: size || height * 0.06, color: color || '#707070'},
        ]}>
        {title}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'NotoSansKR-Bold',
    fontWeight: 'bold',
  },
});
