import React from 'react';
import Registration from './../Registration';
import Stack from './stack';
import {createDrawerNavigator} from 'react-navigation';

const Drawer = createDrawerNavigator({
    Home:{
        screen:Registration
    },
    Login:{
        screen:Stack
    },
});

export default Drawer;