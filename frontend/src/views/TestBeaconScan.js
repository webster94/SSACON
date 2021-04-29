import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Manager } from 'buildthing-ble-sdk';
import { useState } from 'react';
import { useEffect } from 'react';


export default function TestBeaconScan () {
  const bleManager = new Manager();
  // const [bleManager, setManager] = useState(new Manager())

  useEffect(() => {
    bleManager.on('stateChange', (state) => {
      // if (state === 'poweredOn') main()
      console.log(state);
    })
    
    bleManager.on('discover', (beacon) => {
      console.log(beacon)
    })
  })
  
  return (
    <View>
      
    </View>
  )
};