import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './components/Field';

export default props => {
  const rows = props.board.map((row, rowI) => {
    const columns = row.map((field, columnI) => {
      return <Field {...field} key={columnI} />;
    });
    return <View key={rowI}>{columns}</View>;
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
  },
});
