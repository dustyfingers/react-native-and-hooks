import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({});

const ImageDetail = ({ title, imageSrc }) => {
    return (

        <View>

            <Image source={imageSrc} />

            <Text>{title}</Text>

        </View>

    );
};

export default ImageDetail;