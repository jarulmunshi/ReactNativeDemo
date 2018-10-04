import React,{Component} from 'react';
import {Calendar} from 'react-native-calendars';
import {SafeAreaView,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cal extends Component {
    static navigationOptions = {
        tabBarLabel: 'Calender',
        tabBarIcon: () => <Icon name="calendar" size={25} style={{color:'gray'}} />
    };
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View style={{justifyContent:'center'}}>
                    <Calendar/>
                </View>
            </SafeAreaView>
        )
    }

};

export default Cal;