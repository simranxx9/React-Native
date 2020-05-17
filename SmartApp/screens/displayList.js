import React, { Component } from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import firebase from '../config/firebaseConfig';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/cards';
import { FontAwesome } from '@expo/vector-icons';

class DisplayList extends Component{

    state={
        item:[],
        isLoading:false
    }

    // componentWillUpdate(){
    //     this.deleteTodo(item);
    // }

    componentWillMount(){
        this.getData();
    }

    
    getData=()=>{
        this.setState({isLoading:true});
        firebase.firestore().collection('new_accounts').get()
                .then(snapshot=>{
                    snapshot.docs.forEach(doc=>{
                        if(doc.id == this.props.uid)
                        {
                            console.log(doc.data());
                            
                            this.setState({
                                item:doc.data().document
                            })
                            // navigation.navigate('TabNavigator',item);
                        
                        }
                    })
                }).finally(()=>this.setState({isLoading:false}));
                

    }
    deleteTodo=(item)=>{
        // this.setState({isLoading:true});
        firebase.firestore().collection('new_accounts').doc(this.props.uid)
        .update({
            document:firebase.firestore.FieldValue.arrayRemove(item)
        }).then(()=>{
            console.log('delete success');
    })
        
    }
    

    render(){
         
        return(
           <View>
               {/* {this.props.todo?<Text>{this.props.todo}</Text>:null} */}
               <FlatList
                data={this.state.item}
                keyExtractor={()=>Math.random().toString()}
                refreshing={this.state.isLoading}
                onRefresh={this.getData}
                renderItem={({item})=>(
                    <View>
                        <Card >
                                <Text>{item}</Text>
                        </Card>
                        <TouchableOpacity style={styles.deleteBtn} onPress={()=>this.deleteTodo(item)}>
                                    <FontAwesome name='remove'  size={20}
                                    />
                        </TouchableOpacity>
                    </View>
                )}
                />
           </View>
        )
    }



}

const styles = StyleSheet.create({
    todoContainer:{
        flexDirection:'row'
    },
    deleteBtn:{
        fontSize:18,
        position:'absolute',
        right:20,
        top:'50%',
        alignSelf:'baseline',
    },
    
})

export default DisplayList;