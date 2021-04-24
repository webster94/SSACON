import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useState, useEffect} from 'react/cjs/react.development';
import BackgroundAbsolute from '../components/elements/BackgroundAbsolute';
import Authtitle from '../components/elements/AuthTitle';
import Header from '../components/elements/Header';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

export default function EmployeeList() {
  const [tableHead, setTableHead] = useState([]);
  const [tableData, setTableData] = useState([]);
  const imageSrc = require('../assets/Background.jpg');
  useEffect(() => {
    setTableHead(['근무자', '현재위치', '근무형태', '전화']);
    setTableData([
      ['신민호1', '신민호2', '신민호3', '신민호4'],
      ['박승범a', '박승범b', '박승범c', '박승범d'],
      ['정현우1', '정현우2', '정현우3', '정현우4'],
      ['차수연a', '구진범b', '차수연c', '구진범d'],
    ]);
  }, []);
  const element = (data, index) => (
    <TouchableOpacity onPress={() => alert('여보세요!')}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <BackgroundAbsolute imageSrc={imageSrc}>
      <Header back={true} />
      <View style={styles.container}>
        <Authtitle title={'Worker List'}></Authtitle>
        <Table borderStyle={{borderWidth: 2, borderColor: 'grey'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    </BackgroundAbsolute>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'transparent',
  },
  head: {
    height: 40,
    backgroundColor: 'grey',
  },
  text: {margin: 6, color: 'white'},
  row: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  btn: {width: 58, height: 18, backgroundColor: 'blue', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});
