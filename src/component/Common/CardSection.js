import React from 'react';
import {View} from 'react-native';
import {cardSectionStyles} from './../../Helper/styles/Style';
const CardSection = (props) =>{
    return(
        <View style={cardSectionStyles.containerStyle}>
            {props.children}
        </View>
    );
};

export {CardSection};