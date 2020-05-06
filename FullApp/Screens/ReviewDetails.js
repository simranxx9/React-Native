import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Card from '../shared/card';
import {imgs} from '../styles/globalStyles';


export default function ReviewDetails({navigation}){
    const rating = navigation.getParam('rating');
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Rating:</Text>
                    <Image source={imgs.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'center',
    }
})
