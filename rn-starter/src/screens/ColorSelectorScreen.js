import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';


const styles = StyleSheet.create({});

const ColorSelectorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    useEffect(() => {
        console.log(`red: ${red}, green: ${green}, blue: ${blue}`);
    }, [red, green, blue]);

    return (

        <View>

            <ColorCounter 
                color="Red" 
                handleIncrease={() => setRed(Math.min(red + 12, 255))}
                handleDecrease={() => setRed(Math.max(red - 12, 0))} />

            <ColorCounter 
                color="Green" 
                handleIncrease={() => setGreen(Math.min(green + 12, 255))}
                handleDecrease={() => setGreen(Math.max(green - 12, 0))} />

            <ColorCounter 
                color="Blue"
                handleIncrease={() => setBlue(Math.min(blue + 12, 255))}
                handleDecrease={() => setBlue(Math.max(blue - 12, 0))} />

            <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>

        </View>

    );

};

export default ColorSelectorScreen;