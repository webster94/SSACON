import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {Manager} from 'buildthing-ble-sdk';

export default function BeaconTest() {
  const bleManager = new Manager();
  console.log(bleManager);
  const startScan = () => {
    bleManager.on('discover', beacon => {
      console.log(beacon);
    });

    bleManager.on('stateChange', state => {
      if (state === 'poweredOn') bleManager.startScan();
    });
  };
  return (
    <View>
      <Button
        onPress={() => {
          startScan();
        }}
        title={'Beacon'}></Button>
    </View>
  );
}
