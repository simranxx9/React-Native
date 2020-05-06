import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function About(){
    return(
        <View style={globalStyles.container}>
            <Image source={require('../assets/imgs/heart_logo.png')} style={styles.image}/>
            <Image source={require('../assets/imgs/heart_logo.png')} style={styles.image}/>
            <Image source={require('../assets/imgs/heart_logo.png')} style={styles.image}/>
            <Text style={globalStyles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        marginLeft:50,
        marginHorizontal: 15
      },
})


