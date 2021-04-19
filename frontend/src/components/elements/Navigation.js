import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

export default function Navigation({navigation}) {
  return (
    <ScrollView>
      <Text>Navigation 테스트</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Text> </Text>
      <Button title="Main" onPress={() => navigation.navigate('Main')} />
      <Text> </Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Text> </Text>
    </ScrollView>
  );
}
