import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Modal} from 'react-native';
import { FontAwesome ,MaterialIcons} from '@expo/vector-icons';
import firebase from '../config/firebaseConfig';
import Container from '../shared/container';
import Card from '../shared/cards';
import {WebView} from 'react-native-webview';
import EditName from './editName';



export default function Profile({navigation}){
    // const {state} = navigation;

    const uid=navigation.getParam('uid') ;
    const name=navigation.getParam('name') ;
    const [modal,setModel] = useState(false);
    

    function logout(){
        firebase.auth().signOut().then(()=>{
            console.log('log out');
            navigation.navigate('Login');
        }).then(()=>{
            alert('Successfully Logged out!');
            console.log(name);
        })
        .catch((err)=>alert(err));

    }
    const editName=(Name)=>{
        firebase.firestore().collection('new_accounts').doc(uid).update({
            name:Name.name
        }).then(()=>{
            console.log('name updated')
            setModel(false);
        });
    }
    return(
        <Container>
            <View style={styles.container}>
            
            <Card>
                <FontAwesome name='user' size={100} color='#aaa'/>
            </Card>
                <View style={styles.textProfileContainer}>
                    <Modal visible={modal} animationType='slide'>
                        <View style={styles.modalContent}>
                            <MaterialIcons name='close' size={28} style={{textAlign:'center',margin:20}}
                                onPress={()=>setModel(false)}
                            />
                            <EditName editName={editName} name={name}/>
                        </View>
                    </Modal>
                    <Text style={styles.textProfile}>{name}</Text>
                    <TouchableOpacity style={{position:'absolute',right:20,alignSelf:'center'}} 
                    onPress={()=>setModel(true)}>
                        <FontAwesome name='pencil' size={20} 
                        />
                    </TouchableOpacity>
                </View>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:50,
    },
    button:{
        marginTop:40,
        padding:10,
        backgroundColor:'#38ACEC',
        width:'90%',
        borderRadius:30,
        alignSelf:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
    },
    textProfile:{
        textAlign:'center',
        color:'#111',
        fontWeight:'bold',
        fontSize:20,
    },
    textProfileContainer:{
        flexDirection:'row',
        borderWidth:1,
        width:'90%',
        justifyContent:'center',
        padding:10,
    },
    modalContent:{
        flex:1,
    },
})