import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {buttonStyles} from './../../Helper/styles/Style';
const Button = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
            <Text style={buttonStyles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};

export {Button};