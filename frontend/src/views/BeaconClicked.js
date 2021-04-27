import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/elements/Header';
import Layout from '../components/elements/Layout';
const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

export default function BeaconClicked() {
  return (
    <View style={styles.container}>
      <Header back={true} />
      <View style={styles.content}>
        <Text style={styles.Beacon__name}>비콘1</Text>
        <View style={styles.Beacon__counts}>
          <Text style={styles.Beacon__count}>현재 작업자 인원</Text>
          <Text style={styles.Beacon__count}>전체 출입 등록 인원</Text>
        </View>
        <View style={styles.Beacon__info}>
          <View style={styles.Beacon__symbol}>

          </View>
          <View style={styles.Beacon__temp}>
            <View style = {styles.Beacon__stick}>

            </View>
            <View style = {styles.Beacon__stick}>

            </View>
          </View>
        </View>
        <View style={styles.Beacon__info}>
          <View style={styles.Beacon__symbol}>

          </View>
          <View style={styles.Beacon__temp}>
            <View style = {styles.Beacon__stick}>

            </View>
            <View style = {styles.Beacon__stick}>

            </View>
          </View>
        </View>
        <View style={styles.Beacon__info}>
          <View style={styles.Beacon__symbol}>

          </View>
          <View style={styles.Beacon__temp}>
            <View style = {styles.Beacon__stick}>

            </View>
            <View style = {styles.Beacon__stick}>

            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#505050',
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems:'center',
  },
  content: {
    backgroundColor:'black',
    width: wp('80%'),
    height:hp('80%'),
    borderRadius: 10,
  },  
  Beacon__name: {
    fontSize: hp('3%'),
    color:'white',
    textAlign:'center',
    marginTop: hp('5%'),
  },
  Beacon__counts: {
    display:'flex',
    justifyContent:'space-evenly',
    flexDirection:'row',
    marginTop: hp('2%'),
    // backgroundColor:'red',
  },
  Beacon__count: {
    fontSize: hp('1.5%'),
    color:'white',
  },
  Beacon__info: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:90,
    alignItems:'center',
  },
  Beacon__symbol: {
    borderRadius:50,
    backgroundColor:'yellow',
    width: wp('8%'),
    height:wp('8%'),
    
  },  
  Beacon__stick: {
    width: wp('50%'),
    height: hp('3%'),
    backgroundColor:'#a8a8a8',
    marginBottom:15,
  },
});