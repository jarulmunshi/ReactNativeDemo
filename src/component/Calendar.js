import React,{Component} from 'react';
import {Calendar} from 'react-native-calendars';
import {SafeAreaView,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from './Common/Common';
class Cal extends Component {
    static navigationOptions = {
        tabBarLabel: 'Calender',
        tabBarIcon: () => <Icon name="calendar" size={25} style={{color:'gray'}} />
    };
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <Header headerText="Calendar" headIcon="calendar"/>
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={{
                        borderColor: 'gray',
                        height: 350,
                        marginTop:25
                      }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: 'rgb(222,151,37)',
                            selectedDayBackgroundColor: 'rgb(43,83,137)',
                            todayTextColor: 'rgb(43,83,137)',
                            textDisabledColor: '#d9e1e8',
                            arrowColor: 'rgb(222,151,37)',
                            monthTextColor: 'rgb(43,83,137)',
                            textMonthFontWeight: 'bold',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                          }}
                    />
                {/*<View style={{justifyContent:'center'}}>*/}
                    {/*<Calendar/>*/}
                {/*</View>*/}
            </SafeAreaView>
        )
    }

};

export default Cal;