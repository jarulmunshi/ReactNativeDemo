import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

const Button = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles={
    buttonStyle:{
        backgroundColor:'#fff',
        alignSelf:'stretch',
        borderRadius:5,
        borderWidth:1,
        // borderColor:'rgb(254,40,81)',
        marginLeft:5,
        marginRight:5,
        height:40,
        flex:1
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        // color:'rgb(254,40,81)',
        fontWeight:'600',
        paddingBottom:10,
        paddingTop:10
    }
}
export {Button};