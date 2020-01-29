import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';

const DifficultSelectionButton = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={() => props.onLevelSelected()}>
      <Text style={styles.buttonLabel}>{props.buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <DifficultSelectionButton
            style={styles.bgEasy}
            buttonLabel="Fácil"
            onLevelSelected={() => props.onLevelSelected(0.1)}
          />
          <DifficultSelectionButton
            style={styles.bgNormal}
            buttonLabel="Médio"
            onLevelSelected={() => props.onLevelSelected(0.2)}
          />
          <DifficultSelectionButton
            style={styles.bgHard}
            buttonLabel="Díficil"
            onLevelSelected={() => props.onLevelSelected(0.3)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
});
