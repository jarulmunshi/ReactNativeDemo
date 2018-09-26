import React from 'react';
import UserDetail from './../UsersDetail';
import Login from './../Login';
import {createStackNavigator} from 'react-navigation';

const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        UserDetail:{
            screen:UserDetail
        }
    },
    {
        initialRouteName:'Login'
    }
)

export default stack;