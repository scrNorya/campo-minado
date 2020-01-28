import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
  const {mined, opened, exploded, flagged, nearMines} = props;

  const styleField = [styles.field];
  if (opened) {
    styleField.push(styles.opened);
  }
  if (exploded) {
    styleField.push(styles.exploded);
  }
  if (flagged) {
    styleField.push(styles.flagged);
  }
  if (!opened && !exploded) {
    styleField.push(styles.regular);
  }

  let color = null;
  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2A28D7';
    } else if (nearMines === 2) {
      color = '#28520F';
    } else if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    } else if (nearMines >= 6) {
      color = '#F221A9';
    }
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
});
