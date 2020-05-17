import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';


export default function customButton({title}){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        padding:10,
        backgroundColor:'pink',
    },
    buttonText:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
    }
})