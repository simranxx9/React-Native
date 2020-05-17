import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';


export default function customLink({navigation}){
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign Up!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText:{
        color:'blue',
        fontSize:18,
        marginLeft:10,
    }
})