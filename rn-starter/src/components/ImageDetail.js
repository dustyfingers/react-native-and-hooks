import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({});

const ImageDetail = ({ title, imageSrc, imageScore }) => {
    return (

        <View>

            <Image source={imageSrc} />

            <Text>{title} - {imageScore} likes</Text>

        </View>

    );
};

export default ImageDetail;