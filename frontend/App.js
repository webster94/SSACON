import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/Home';
import Main from './src/views/Main';
import Login from './src/views/Login';
import CheckAttandance from './src/views/CheckAttandance';
import EmployeeList from './src/views/EmployeeList';
import List from './src/views/List';
import BeaconClicked from './src/views/BeaconClicked';
import PersonClicked from './src/views/PersonClicked';
import Navigation from './src/components/elements/Navigation';
import TestBeaconScan from './src/views/TestBeaconScan';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="CheckAttandance" component={CheckAttandance} />
        <Stack.Screen name="EmployeeList" component={EmployeeList} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="BeaconClicked" component={BeaconClicked} />
        <Stack.Screen name="PersonClicked" component={PersonClicked} />
        <Stack.Screen name="TestBeaconScan" component={TestBeaconScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
