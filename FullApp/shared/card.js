import React from 'react';
import {View,StyleSheet} from 'react-native';

export default function card(props){
    return(
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        elevation:10,
        borderWidth:.6,
        borderRadius:10,
        shadowRadius:10,
        shadowColor:'#111',
        backgroundColor:'#fff',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.1,
        marginHorizontal:30,
        marginVertical:10,
    },
    cardContent:{
        padding:10,
    }
})