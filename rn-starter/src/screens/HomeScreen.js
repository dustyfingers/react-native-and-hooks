import React from 'react';
import { Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = () => {
  return <Text style={styles.text}>HiThere!</Text>;
};

export default HomeScreen;