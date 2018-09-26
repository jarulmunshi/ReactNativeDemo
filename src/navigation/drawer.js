import React from 'react';
import Login from './../Login';
import Home from './../Home';
import {createDrawerNavigator} from 'react-navigation';

const Drawer = createDrawerNavigator({
    Home:{
      screen:Home
    },
    Login:{
        screen:Login
    }
});

export default Drawer;