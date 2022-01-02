import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';


const styles = StyleSheet.create({});

const ImageScreen = () => {

    return (

        <View>

            <ImageDetail title="forest" imageSrc={require("../../assets/images/forest.jpg")} />

            <ImageDetail title="beach" imageSrc={require("../../assets/images/beach.jpg")} />

            <ImageDetail title="mountain" imageSrc={require("../../assets/images/mountain.jpg")} />

        </View>

    );

};

export default ImageScreen;