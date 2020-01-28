import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Params from './src/params';

export default class Mines extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Hello World do Mines!</Text>
        <Text style={styles.text}>
          Tamanho da grade:
          {Params.getRowsAmount()}X{Params.getColumnsAmount()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
});
