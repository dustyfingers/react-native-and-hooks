import React, { useEffect, useState, useReducer } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';
import { clamp } from '../helpers/tools';


const COLOR_INCREMENT = 20;

const styles = StyleSheet.create({});

const reducer = (state, action) => {
    
    switch (action.color) 
    {

        case 'red':
            return {...state, red: clamp(state.red + action.amount, 0 , 255)};

        case 'green':
            return {...state, green: clamp(state.green + action.amount, 0 , 255)};

        case 'blue':
            return {...state, blue: clamp(state.blue + action.amount, 0 , 255)};

        default:
            return state;

    }

};

const ColorSelectorScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    // these exist in 'state' above now
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // all this nastly logic is contained in the reducer above now!
    // much cleaner, isnt it?
    // const handleColorChange = (color, add) => {

    //     switch (color) {

    //         case "Red":
    //             if (add) setRed(Math.min(red + COLOR_INCREMENT, 255));
    //             else setRed(Math.max(red - COLOR_INCREMENT, 0));
    //             break;

    //         case "Green":
    //             if (add) setGreen(Math.min(green + COLOR_INCREMENT, 255));
    //             else setGreen(Math.max(green - COLOR_INCREMENT, 0));
    //             break;

    //         case "Blue":
    //             if (add) setBlue(Math.min(blue + COLOR_INCREMENT, 255));
    //             else setBlue(Math.max(blue - COLOR_INCREMENT, 0));
    //             break;

    //         default:
    //             break;

    //     }

    // };

    // watch state changes
    useEffect(() => console.log(state), [state]);

    return (

        <View>

            <ColorCounter 
                color="Red" 
                handleIncrease={() => dispatch({color: 'red', amount: COLOR_INCREMENT})}
                handleDecrease={() => dispatch({color: 'red', amount: COLOR_INCREMENT * -1})} />

            <ColorCounter 
                color="Green" 
                handleIncrease={() => dispatch({color: 'green', amount: COLOR_INCREMENT})}
                handleDecrease={() => dispatch({color: 'green', amount: COLOR_INCREMENT * -1})} />

            <ColorCounter 
                color="Blue"
                handleIncrease={() => dispatch({color: 'blue', amount: COLOR_INCREMENT})}
                handleDecrease={() =>dispatch({color: 'blue', amount: COLOR_INCREMENT * -1})} />

            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>

        </View>

    );

};

export default ColorSelectorScreen;