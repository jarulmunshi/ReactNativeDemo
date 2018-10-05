import React,{Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class demo extends Component{
     static navigationOptions = {
        tabBarLabel: 'Demo',
        tabBarIcon: () => <Icon name="user" size={25} style={{color:'gray'}} />
    };
     render(){
         return(
             <Text>Demo</Text>
         )
     }

}
export default demo;
