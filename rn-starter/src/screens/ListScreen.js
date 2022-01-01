import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

const ListScreen = () => {

    const friends = [
        { name: 'ben', age: 21 },
        { name: 'lou', age: 22 },
        { name: 'rex', age: 28 },
        { name: 'adam', age: 29 },
        { name: 'isaac', age: 27 },
        { name: 'leonardo', age: 24 },
        { name: 'vlad', age: 21 },
        { name: 'brad', age: 22 }
    ];

    return (
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }} />
    );

};

export default ListScreen;
