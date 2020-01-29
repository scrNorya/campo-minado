import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import params from './src/params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
} from './src/functions';
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
      won: false,
      lost: false,
    };
  };

  handleOnOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu.', 'O JOGO - perdeu de novo');
    }

    if (won) {
      Alert.alert('Ganhou');
    }

    this.setState({board, lost, won});
  };

  handleOnSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Ganhou');
    }

    this.setState({board, won});
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
          <MineField
            board={this.state.board}
            onOpenField={this.handleOnOpenField}
            onSelectField={this.handleOnSelectField}
          />
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
