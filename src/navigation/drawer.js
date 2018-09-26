import React from 'react';
import Home from './../Home';
import {createDrawerNavigator} from 'react-navigation';

const Drawer = createDrawerNavigator({
    Home:{
        screen:Home
    }
});

export default Drawer;