import React from 'react';
import {View,ImageBackground} from 'react-native';

export default function Container(props){
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={{width:'100%',height:'100%'}}>
            {props.children}
        </ImageBackground>
    )
}
