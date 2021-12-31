import React from 'react';
import { Text, Stylesheet } from 'react-native';


const styles = Stylesheet.create({
    textStyle: {
        fontSize: 30
    }
});

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the components screen!</Text>;
};

export default ComponentsScreen;