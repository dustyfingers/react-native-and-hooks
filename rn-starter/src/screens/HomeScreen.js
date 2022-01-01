import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = ({ navigation }) => {

  const navigateToComponentsDemo = () => navigation.navigate("Components");

  const navigateToListDemo = () => navigation.navigate("List");

  return (

    <View>

      <Text style={styles.text}>HiThere!</Text>

      {/* button primitive component */}
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigateToComponentsDemo()} />

      {/* touchable opacity component - much more extensible */}
      {/* allows multiple child elements! (eg icon & text, etc) */}
      <TouchableOpacity onPress={() => navigateToListDemo()}>

        <Text>Go to List Demo</Text>

      </TouchableOpacity>

    </View>

  );

};

export default HomeScreen;