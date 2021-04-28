import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

export default function Navigation({navigation}) {
  return (
    <ScrollView ini>
      <Text>Navigation 테스트</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Text> </Text>
      <Button title="Main" onPress={() => navigation.navigate('Main')} />
      <Text> </Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Text> </Text>
      <Button title="List" onPress={() => navigation.navigate('List')} />
      <Text> </Text>
      <Button
        title="EmployeeList"
        onPress={() => navigation.navigate('EmployeeList')}
      />
      <Text> </Text>
      <Button
        title="CheckAttandance"
        onPress={() => navigation.navigate('CheckAttandance')}
      />
      <Text> </Text>
      <Button
        title="BeaconClicked"
        onPress={() => navigation.navigate('BeaconClicked')}
      />
      <Text> </Text>
      <Button
        title="PersonClicked"
        onPress={() => navigation.navigate('PersonClicked')}
      />
      <Text> </Text>

      <Button title="TestBeacon" onPress={() => navigation.navigate('TestBeaconScan')} />
      <Text> </Text>
    </ScrollView>
  );
}
