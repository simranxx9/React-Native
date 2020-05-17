import React from 'react';
import  {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props){
    return(
        <TouchableOpacity style={styles.cardHead}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardHead: {
        marginTop:10,
        borderRadius: 30,
        elevation: 3,
        width:'75%',
        position:'relative',
        // alignSelf:'center',
        marginLeft:20,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom:10,
      },
      cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        textAlign:'center',
        // alignSelf:'center'
      }
})