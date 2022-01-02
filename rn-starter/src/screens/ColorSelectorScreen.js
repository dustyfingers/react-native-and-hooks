import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 9;

const styles = StyleSheet.create({});

const ColorSelectorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // check if state is updating correctly
    useEffect(() => {
        console.log(`red: ${red}, green: ${green}, blue: ${blue}`);
    }, [red, green, blue]);

    const handleColorChange = (color, add) => {

        switch (color) {

            case "Red":
                if (add) setRed(Math.min(red + COLOR_INCREMENT, 255));
                else setRed(Math.max(red - COLOR_INCREMENT, 0));
                break;

            case "Green":
                if (add) setGreen(Math.min(green + COLOR_INCREMENT, 255));
                else setGreen(Math.max(green - COLOR_INCREMENT, 0));
                break;

            case "Blue":
                if (add) setBlue(Math.min(blue + COLOR_INCREMENT, 255));
                else setBlue(Math.max(blue - COLOR_INCREMENT, 0));
                break;

            default:
                break;

        }

    };

    return (

        <View>

            <ColorCounter 
                color="Red" 
                handleIncrease={() => handleColorChange('Red', 1)}
                handleDecrease={() => handleColorChange('Red', 0)} />

            <ColorCounter 
                color="Green" 
                handleIncrease={() => handleColorChange('Green', 1)}
                handleDecrease={() => handleColorChange('Green', 0)} />

            <ColorCounter 
                color="Blue"
                handleIncrease={() => handleColorChange('Blue', 1)}
                handleDecrease={() => handleColorChange('Blue', 0)} />

            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>

        </View>

    );

};

export default ColorSelectorScreen;