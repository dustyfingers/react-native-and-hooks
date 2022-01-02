import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const styles = StyleSheet.create({});

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    const addNewColor = () => {
        setColors([...colors, generateRandomRgb()]);
    };

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
                onPress={addNewColor} />

            <FlatList 
                keyExtractor={color => color}
                data={colors} 
                renderItem={ ({item}) => <View style={{ height: 100, width: 100, backgroundColor: item }} /> } />

        </View>
    );

};

export default ColorScreen;
