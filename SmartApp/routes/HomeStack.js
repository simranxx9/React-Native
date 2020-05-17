import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../shared/header';

import Home from '../screens/home';

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:()=><Header title='Home'/>
        }
    },
    
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;