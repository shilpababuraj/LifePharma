import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Product from './screens/Product';

const App = () => {
  return (
    <View style={styles.container}>
      <Product/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;