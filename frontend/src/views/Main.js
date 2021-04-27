import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button, Text, Modal, Pressable, FlatList, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import Header from '../components/elements/Header';
import BackgroundAbsolute from '../components/elements/BackgroundAbsolute';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BasicButton from '../components/elements/BasicButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Main({navigation}) {
  const imageSrc = require('../assets/tempbackground2.png');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setData([
      {
        data: ['beacon1', '26', '40%'],
        id: '2',
      },
      {
        data: ['비콘', '24', '10%'],
        id: '3',
      },
      {
        data: ['사무실', '26', '40%'],
        id: '4',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '5',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '6',
      },
      {
        data: ['beacon1', '28', '40%'],
        id: '7',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '8',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '9',
      },
      {
        data: ['beacon1', '28', '40%'],
        id: '77',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '88',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '99',
      },
      {
        data: ['beacon1', '28', '40%'],
        id: '17',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '18',
      },
      {
        data: ['beacon1', '26', '40%'],
        id: '19',
      },
    ])
  }, [])

  const Item = ({ item, onPress, backgroundColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, backgroundColor]}
      activeOpacity={1}
      delayPressIn={0}>
      <Table>
        <Row data={item.data} textStyle={styles.text}></Row>
      </Table>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F3F7FA" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
      />
    );
  };

  return(
    <BackgroundAbsolute imageSrc={imageSrc}>
    <Header back="true"/>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      propagateSwipe={true}
      style={styles.modalText}
    >
    <View style={[styles.modalView, styles.centeredView, styles.modal]}>
      <View style={[styles.item, styles.header]}>
      <Table>
        <Row data={['비콘 이름','온도(℃)','습도(상대)']} textStyle={styles.text}></Row>
      </Table>
      <View style={styles.hr}/>
      </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    </View>
    </Modal>

    <TouchableHighlight
      style={styles.pressable}
      onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.touchable}>
      <FontAwesome5
        style={styles.arrowIcon}
        name={'chevron-up'}/>
      </View>
    </TouchableHighlight>
    </BackgroundAbsolute>
  )
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#33333333',
    width: hp('8%'),
    height: hp('8%'),
    borderRadius: hp('4%'),
    marginTop: hp('80%'),
  },
  touchable: {
    width: hp('8%'),
    height: hp('8%'),
  },
  arrowIcon: {
    position: 'absolute',
    color: '#ffffffcc',
    marginLeft: hp('0.4%'),
    marginTop: hp('-0.4%'),
    fontSize: hp('8%'),
    zIndex: 99,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    marginVertical: hp('4%'),
    marginHorizontal: wp('8%'),
    backgroundColor: "white",
    borderRadius: hp('1%'),
    paddingVertical: hp('1%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    padding: 20,
  },
  header: {
    paddingBottom: 0,
  },
  title: {
    fontSize: 32,
  },
  text: {
    textAlign: "center"
  },
  hr: {
    borderBottomColor: '#020613',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 0,
  }
});
