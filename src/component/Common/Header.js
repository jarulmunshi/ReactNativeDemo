import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {headerStyles} from './../../Helper/styles/Style';
import {DrawerAction} from 'react-navigation';
const Header = (props) =>{
    const {headerStyle,textStyle} = headerStyles;
    return(
        <View style={headerStyle}>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();}}>
                    {/*<Icon name="list-ul" size={25}/>*/}
                </TouchableOpacity>

            </View>
            <View style={{flex:2,flexDirection:'row',paddingLeft:20}}>
                <Icon style={{paddingRight:5,color:'rgb(43,83,137)'}} name={props.headIcon} size={25}/>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </View>
    )
};
export {Header};