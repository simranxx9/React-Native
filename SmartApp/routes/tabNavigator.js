import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../screens/home';
import Profile from '../screens/profile';
import Upload from '../screens/upload';

const screens = {
    Home:{
            screen:Home,
            navigationOptions:{
                tabBarIcon:
                    <FontAwesome name='home' size={30} color='black'/>,
                
            },
        },
        Profile:{
            screen:Profile,
            navigationOptions:{
                tabBarIcon:
                    <FontAwesome name='user' size={30} color='black'/>,
                    
            }
        }
}

const TabNavigator = createBottomTabNavigator(screens,{
    defaultNavigationOptions:{
        tabBarOptions: { backgroundColor: '#fff', elevation:0 , shadowRadius: 0,
        shadowOffset: {
            height: 0,
        }},
    }
});

export default TabNavigator;