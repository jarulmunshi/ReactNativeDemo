import React from 'react';
import {View} from 'react-native';
import {cardStyles} from './../../Helper/styles/Style';
const Card = (props) =>{
    return(
    <View style={cardStyles.containerStyle}>
        {props.children}
    </View>
    );
};

export {Card};