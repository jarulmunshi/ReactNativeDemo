import React from 'react';
import UserDetail from '../component/UsersDetail';
import Login from '../component/Login';
import EditUser from '../component/EditUser';
import {createStackNavigator} from 'react-navigation';
import tab from './tab';

const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        tab:{
            screen:tab
        },
        EditUser:{
            screen:EditUser
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;