import React from 'react';
import {View,Text,StyleSheet,Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation,title}){
    return(
        <ImageBackground source={require('../assets/imgs/game_bg.png')} style={styles.container}>
            <MaterialIcons name='menu' size={28} color='#111' onPress={navigation.openDrawer}/>
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/imgs/heart_logo.png')} style={styles.headerImage}/>
                    <Text style={styles.content}>{title}</Text>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width:'100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#333',
      letterSpacing: 1,
      // marginLeft:100,
    },
    headerTitle: {
      flexDirection: 'row',
      justifyContent:'center',
      // position:'absolute',
      // left:100,
      paddingRight:200,
      marginVertical:10,
    },
    headerImage: {
      width: 30,
      height: 30,
      marginLeft:50,
      marginHorizontal: 15
    },
  });