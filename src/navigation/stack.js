import React from 'react';
import UserDetail from '../component/UsersDetail';
import Login from '../component/Login';
import EditUser from '../component/EditUser';
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
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;