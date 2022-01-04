import React, { useEffect, useState, useReducer } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';
import { clamp } from '../helpers/tools';


const COLOR_INCREMENT = 20;

const styles = StyleSheet.create({});

const reducer = (state, action) => {
    
    switch (action.type) 
    {

        case 'change_red':
            return {...state, red: clamp(state.red + action.payload, 0 , 255)};

        case 'change_green':
            return {...state, green: clamp(state.green + action.payload, 0 , 255)};

        case 'change_blue':
            return {...state, blue: clamp(state.blue + action.payload, 0 , 255)};

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
                handleIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                handleDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})} />

            <ColorCounter 
                color="Green" 
                handleIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                handleDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})} />

            <ColorCounter 
                color="Blue"
                handleIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                handleDecrease={() =>dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})} />

            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>

        </View>

    );

};

export default ColorSelectorScreen;