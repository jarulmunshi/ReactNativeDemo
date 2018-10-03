import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import {spinnerStyles} from './../../Helper/styles/Style';
const Spinner = ({size}) =>{
    return(
        <View style={spinnerStyles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
};


export {Spinner}