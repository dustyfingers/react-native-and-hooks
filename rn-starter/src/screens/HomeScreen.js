import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


// TODO: style this screen

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = ({ navigation }) => {

  const navigateToComponentsDemo = () => navigation.navigate('Components');

  const navigateToListDemo = () => navigation.navigate('List');

  const navigateToImageDemo = () => navigation.navigate('Image');

  const navigateToCounterDemo = () => navigation.navigate('Counter');

  const navigateToRandomColorDemo = () => navigation.navigate('RandomColor');

  const navigateToColorSelectorDemo = () => navigation.navigate('ColorSelector');

  const navigateToTextInputDemo = () => navigation.navigate('TextInput');

  const navigateToBoxModelDemo = () => navigation.navigate('BoxModel');

  return (

    <View>

      {/* <Text style={styles.text}>HiThere!</Text> */}

      {/* button primitive component */}
      {/* components demo */}
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigateToComponentsDemo()} />

      {/* touchable opacity component is much more extensible than <Button> ! */}
      {/* allows multiple child elements! (eg icon & text, etc) */}
      {/* list demo */}
      <Button 
        title="Go to List Demo"
        onPress={() => navigateToListDemo()} />

      {/* image demo */}
      <Button 
        title="Go to Image Demo"
        onPress={() => navigateToImageDemo()} />

      {/* counter demo */}
      <Button 
        title="Go to Counter Demo"
        onPress={() => navigateToCounterDemo()} />

      {/* color demo */}
      <Button 
        title="Go to Random Color Demo"
        onPress={() => navigateToRandomColorDemo()} />

      {/* color selector demo */}
      <Button 
        title="Go to Color Selector Demo"
        onPress={() => navigateToColorSelectorDemo()} />

      {/* text input demo */}
      <Button 
        title="Go to Text Input Demo"
        onPress={() => navigateToTextInputDemo()} />

      {/* box model demo */}
      <Button 
        title="Go to Box Model Demo"
        onPress={() => navigateToBoxModelDemo()} />

    </View>

  );

};

export default HomeScreen;