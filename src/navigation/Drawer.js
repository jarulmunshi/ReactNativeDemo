import React from 'react';
import Home from './../Home';
import Stack from './stack';
import {createDrawerNavigator} from 'react-navigation';

const Drawer = createDrawerNavigator({
    Home:{
        screen:Home
    },
    Login:{
        screen:Stack
    },
});

export default Drawer;