import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';


const styles = StyleSheet.create({});

const ImageScreen = () => {

    return (

        <View>

            <ImageDetail title="forest" imageSrc={require("../../assets/images/forest.jpg")} imageScore={3} />

            <ImageDetail title="beach" imageSrc={require("../../assets/images/beach.jpg")} imageScore={10} />

            <ImageDetail title="mountain" imageSrc={require("../../assets/images/mountain.jpg")} imageScore={6} />

        </View>

    );

};

export default ImageScreen;