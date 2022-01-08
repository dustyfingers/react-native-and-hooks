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
    const [error, setError] = useState(false);

    // check for proper state change 
    useEffect(() => {
        if (text.length && text.length < 5 && !error) setError(true);
        else if (text.length >= 5 || !text.length) setError(false);
    }, [text]);

    return (

        <View>

            {/* text input works a lil differently in react native! */}
            {/* by default on ios, the first letter of an input is capitalized! the autoCapitalize prop prevents this behavior */}
            {/* autoCorrect=false prevents the smae but with auto correct */}

            <Text>Enter Password:</Text>
            
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                value={text}
                onChangeText={val => setText(val)} />

            <Text>{error ? 'Entered password must be longer than 5 characters.' : ''}</Text>

        </View>

    );

};

export default TextScreen;