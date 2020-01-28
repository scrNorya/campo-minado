import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import params from './src/params';
import {createMinedBoard} from './src/functions';
import MineField from './src/MineField';

export default class Mines extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }
  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Hello World do Mines!</Text>
        <Text style={styles.text}>
          Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
