import React from 'react';
import { View, StyleSheet, Button } from 'react-native';


const styles = StyleSheet.create({});

const ColorScreen = () => {

    const generateRandomRgb = () => {

        const red = Math.floor( Math.random() * 256 );
        const green = Math.floor( Math.random() * 256 );
        const blue = Math.floor( Math.random() * 256 );

        return `rgb(${red}, ${green}, ${blue})`;

    };

    return (

        <View>

            <Button 
                title="Add Color"
                onPress={generateRandomRgb} />

            <View style={{ height: 100, width: 100, backgroundColor: generateRandomRgb() }}>

            </View>

        </View>
    );

};

export default ColorScreen;
