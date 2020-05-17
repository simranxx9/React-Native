import React,{useState ,Component} from 'react';
import {View,Text,StyleSheet,Modal,FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import ReviewForms from '../screens/reviewForm';
import Container from '../shared/container';
// import DisplayList from './displayList';
import {MaterialIcons,FontAwesome} from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../config/firebaseConfig';
import Card from '../shared/cards'

export default class Home extends Component{

    state={
        item:[],
        isLoading:false,
        modal:false,
        // todo:[]
    }
    // const [modal,setModel] = useState(false);
    // const [todo,setTodo] = useState(null);

    componentWillMount(){
        console.log(this.props.navigation.getParam('uid'));
        this.getData();
    }

    
    getData=()=>{
        this.setState({isLoading:true});
        firebase.firestore().collection('new_accounts').get()
                .then(snapshot=>{
                    snapshot.docs.forEach(doc=>{
                        if(doc.id == this.props.navigation.getParam('uid'))
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

    addTodo=(todo)=>{
        // this.setState({
        //     ...item,
        //     item:todo.Todo
        // });
        console.log(todo.Todo);
        firebase.firestore().collection('new_accounts').doc(this.props.navigation.getParam('uid')).update( {
            document: firebase.firestore.FieldValue.arrayUnion(todo.Todo)
         }).then(()=>{
             console.log('hwy done update')
             alert('Updated! Now you can refresh by pulling the page!')
             this.setState({modal:false});
            });
    }

    deleteTodo=(item)=>{
        // this.setState({isLoading:true});
        firebase.firestore().collection('new_accounts').doc(this.props.navigation.getParam('uid'))
        .update({
            document:firebase.firestore.FieldValue.arrayRemove(item)
        }).then(()=>{
            alert('Deleted Successfully! Now refresh!');
            console.log('delete success');
    })
        
    }

    render(){
        return(
        
            <Container>
                 <View>
                 <Modal visible={this.state.modal} animationType='slide'>
                     <View style={styles.modalContent}>
                         <MaterialIcons name='close' size={28} style={styles.addBtn}
                             onPress={()=>this.setState({modal:false})}
                         />
                         <ReviewForms addTodo={this.addTodo}/>
                     </View>
                 </Modal>
                 <TouchableOpacity style={styles.addBtn}>
                     <MaterialIcons name='add' size={28} 
                         onPress={()=>this.setState({modal:true})}
                     />
                 </TouchableOpacity>
                 {/* <Text>{doc}</Text> */}
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
                                <Icon name='trash' onPress={()=>this.deleteTodo(item)}
                                    style={styles.deleteBtn}/>
                            </View>
                        )}
                        />
                    </View>       
                 </View>
            </Container>
        
     ) 
    }
    
}

const styles = StyleSheet.create({
    modalContent:{
        flex:1,
    },
    addBtn:{
        marginTop:10,
        borderRadius: 30,
        elevation: 3,
        alignSelf:'flex-end',
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom:10,
        marginRight:20,
        padding:10,

    },
    todoContainer:{
        flexDirection:'row'
    },
    deleteBtn:{
        fontSize:24,
        position:'absolute',
        right:20,
        top:'50%',
        alignSelf:'baseline',
    },
    
})