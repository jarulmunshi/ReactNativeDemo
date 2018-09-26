import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = (props) =>{
    const {headerStyle,textStyle} = styles;
    return(
        <View style={headerStyle}>
            {/*<View style={{flex:1}}>*/}
                {/*<TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();}}>*/}
                    {/*<Icon style={{ color:'rgb(254,40,81)'}}name="list-ul" size={25}/>*/}
                {/*</TouchableOpacity>*/}

            {/*</View>*/}
            <View style={{flex:3,flexDirection:'row'}}>
                {/*<Icon style={{ color:'rgb(254,40,81)',paddingRight:5}} name="user" size={25}/>*/}
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </View>
    )
}
const styles={
    headerStyle:{
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#ddd',
        shadowColor:'#fff',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.7,
        padding:30,
        flexDirection:'row',
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:20,
        // color:'rgb(254,40,81)'
    }
}
export {Header};