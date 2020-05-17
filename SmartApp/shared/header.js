import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default Header=({title})=>{

    return(
        
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <Image source={require('../assets/icon.png')} style={{width:18,height:18}}/>
            </View>
    )

}

const styles = StyleSheet.create({
    header: {
        flex:1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        fontWeight: 'bold',
        alignSelf:'center',
        fontSize: 30,
        color: '#333',
        letterSpacing: 1,
      },
})