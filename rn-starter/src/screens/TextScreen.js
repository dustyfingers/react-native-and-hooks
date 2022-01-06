import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

const TextScreen = () => {
    return (
        <View>
            {/* text input works a lil differently in react native! */}
            {/* by default on ios, the first letter of an input is capitalized! the autoCapitalize prop prevents this behavior */}
            {/* autoCorrect=false prevents the smae but with auto correct */}
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input} />
        </View>
    );
};

export default TextScreen;