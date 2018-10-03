import React from 'react';
import {TextInput,Text,View} from 'react-native';
import {inputStyles} from './../../Helper/styles/Style';

const Input =({label,value,onChange,placeholder,secureTextEntry})=>{
    return(
     <View style={inputStyles.containerStyle}>
         <Text style={inputStyles.textStyle}>{label}</Text>
         <TextInput
             secureTextEntry={secureTextEntry}
             placeholder={placeholder}
             autoCorrect={false}
             value={value}
             onChangeText={onChange}
            style={inputStyles.inputStyle}
         />
     </View>
    )
};


export {Input}