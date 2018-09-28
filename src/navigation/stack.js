import React from 'react';
import UserDetail from './../UsersDetail';
import Login from './../Login';
import EditUser from './../EditUser';
import {createStackNavigator} from 'react-navigation';

const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        UserDetail:{
            screen:UserDetail
        },
        EditUser:{
            screen:EditUser
        }
    },
    {
        initialRouteName:'UserDetail'
    }
)

export default stack;