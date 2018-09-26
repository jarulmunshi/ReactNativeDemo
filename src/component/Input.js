import React from 'react';
import {TextInput,Text,View} from 'react-native';

const Input =({label,value,onChange,placeholder,secureTextEntry,props})=>{
    return(
     <View style={styles.containerStyle}>
         <Text style={styles.textStyle}>{label}</Text>
         <TextInput
             secureTextEntry={secureTextEntry}
             placeholder={placeholder}
             autoCorrect={false}
             value={value}
             onChangeText={onChange}
            style={styles.inputStyle}
         />
     </View>
    )
}
const styles={
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:20
    },
    inputStyle:{
        color:'#000',
        fontSize:18,
        paddingRight:5,
        paddingLeft:5,
        lineHeight:23,
        flex:2
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export {Input}