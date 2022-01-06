import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


// TODO: style this screen

const styles = StyleSheet.create({});

const reducer = (state, action) => {

    // state should be an object with a 'count' prop that is a number
    // action should be an object with a type prop with the values of 'increment' or 'decrement'
    switch (action.type) {

        case 'increment':
            return { count: state.count + 1 };

        case 'decrement':
            return { count: state.count - 1 };
        
        default:
            return;

    }

};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (

        <View>

            <Button 
                title="Increase Counter" 
                onPress={() => dispatch({ type: 'increment' })} />

            <Button 
                title="Decrease Counter" 
                onPress={() => dispatch({ type: 'decrement' })} />

            <Text>Current Count: {state.count}</Text>

        </View>

    );

}

export default CounterScreen;