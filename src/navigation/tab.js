import React from 'react';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import UserDetail from './../component/UsersDetail';
import Demo from './../component/Demo';
import Cal from './../component/Calendar';
export default TabNavigator(
    {
        User:{screen:UserDetail},
        Demo:{screen:Demo},
        Calendar:{screen:Cal}

    },
    {
        navigationOptions:{
            gesturesEnabled: false
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'rgb(222,151,37)',
            inactiveTintColor: 'gray',
            showIcon:true
        },
        animationEnabled: true,
        swipeEnabled: false,
    }

);