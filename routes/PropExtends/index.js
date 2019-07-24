import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default function PropExtends(props) {
    let sty = { ...style[props.styleObj] }
    sty.color = props.color;
    return (
        <Text style={sty}> I am Prop </Text>
    );
}
const style = StyleSheet.create({
    big: {
        fontSize: 60
    },
    small: {
        fontSize: 12
    }
}) 