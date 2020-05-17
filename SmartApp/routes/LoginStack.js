import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../shared/header';
import { FontAwesome } from '@expo/vector-icons';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import TabNavigator from './tabNavigator';
import SwitchNavigator from './switchNavigator';
import Upload from '../screens/upload';

const screens = {
    Login:{
        screen:Login,
        navigationOptions:{
            title:'Login',
            headerTitleAlign: 'center',
            headerTitleStyle:{
                fontSize:28,
                fontWeight:'bold',
            }
        }
    },
    SignUp:{
        screen:SignUp,
    },
    TabNavigator:{
        screen:TabNavigator,
        navigationOptions:{
            title:<Image source={require('../assets/logo2.png')} style={{width:140,height:49}}/>,
            headerTitleAlign: 'center',
            headerLeft:()=>null,
        }
    },
   
}

const LoginStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title:'',
        headerStyle: { backgroundColor: '#fff', elevation:0 , shadowRadius: 0,
        shadowOffset: {
            height: 0,
        }},
        headerLayoutPreset: 'center',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
    }
});

export default createAppContainer(LoginStack);