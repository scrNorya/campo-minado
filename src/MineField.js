import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './components/Field';

export default props => {
  const rows = props.board.map((row, rowI) => {
    const columns = row.map((field, columnI) => {
      return <Field {...field} key={columnI} />;
    });
    return (
      <View style={styles.rowContainer} key={rowI}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
