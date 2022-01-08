import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

});

const TextScreen = () => {

    const [text, setText] = useState('');

    // check for proper state change 
    useEffect(() => console.log(text), [text]);

    return (

        <View>

            {/* text input works a lil differently in react native! */}
            {/* by default on ios, the first letter of an input is capitalized! the autoCapitalize prop prevents this behavior */}
            {/* autoCorrect=false prevents the smae but with auto correct */}

            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                value={text}
                onChangeText={val => setText(val)} />

            <Text>{text}</Text>

        </View>

    );

};

export default TextScreen;