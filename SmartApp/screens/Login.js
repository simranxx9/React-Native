import React, { Component } from 'react';
import {View,Text,Button,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import firebase from '../config/firebaseConfig';
// import CustomButton from '../shared/customButton';
import CustomLink from '../shared/customLink';
import Container from '../shared/container';
import { FontAwesome } from '@expo/vector-icons';
import * as Facebook from 'expo-facebook';

class Login extends Component{

    state={
        notification:'',
        email:'',
        password:'',
        secure:true,
    }

    async login({email,password},navigation){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((resp)=>{
            // console.log(resp.user);
            firebase.firestore().collection('new_accounts').get()
                .then(snapshot=>{
                    snapshot.docs.forEach(doc=>{
                        if(doc.id == resp.user.uid)
                        {
                            console.log(doc.data());
                            let item=doc.data();
                            navigation.navigate('TabNavigator',item);
                        
                        }
                    })
                })
            
            }
        ).then(()=>alert('Successfully Logged In!')).catch(err=>{
            alert(err);
            console.log(err);
        })
    }


    async loginInWithFacebook(navigation){

        await Facebook.initializeAsync('235816690982537');
        const {type,token} = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      
      
        if(type === 'success')
        {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
      
          firebase.auth().signInWithCredential(credential)
          .then(resp=>{
            // this.setState({notification:'login successfull'});
            // console.log(resp,'uiddddd',resp.user.uid,resp.user.displayName);
            alert('Successfully logged in With Facebook.');
            firebase.firestore().collection('new_accounts').doc(resp.user.uid).set({
              name:resp.user.displayName,
              phoneNumber:resp.user.phoneNumber,
              document:['user created'],
              createdAt:Date.now(),
              uid:resp.user.uid,
            })
            firebase.firestore().collection('new_accounts').get()
                .then(snapshot=>{
                    snapshot.docs.forEach(doc=>{
                        console.log(resp.user.uid);
                        console.log(doc.id);
                        if(doc.id == resp.user.uid)
                        {
                            console.log(doc.data());
                            let item = doc.data()

                            navigation.navigate('TabNavigator',item);
                        }
                    })
                })
          })
          .catch(err=>{
            console.log(err);
          });
        }
      
      };

    render(){
        return(
            <Container>
                <View style={styles.container}>
              <View style={styles.formOuter}>
                <Text style={styles.formHead}>
                    LOGIN!
                </Text>

                <TextInput 
                placeholder='e.g,test@mail.com'
                style={styles.textInput} 
                onChangeText={email=>this.setState({email})}/>  
                
                <View style={styles.passwordField}>
                    <TextInput 
                    placeholder='Password'
                    secureTextEntry={this.state.secure}
                    onChangeText={password=>this.setState({password})}
                    />
                    <FontAwesome name='eye' onPress={()=>{
                      if(this.state.secure == true)
                      {
                        this.setState({secure:false})
                      }
                      else if(this.state.secure == false)
                      {
                        this.setState({secure:true})
                      }
                        
                        }}  style={{position:'absolute',right:30,bottom:15,fontSize:20,color:'#aaa'}}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={()=>this.login(this.state,this.props.navigation)}>
                     <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fbButton} onPress={()=>this.loginInWithFacebook(this.props.navigation)}>
                     <FontAwesome name='facebook' style={{textAlign:'center',color:'#fff',fontSize:20,marginRight:10}}/>
                     <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.notify}>
                    {this.state.notification ? this.state.notification:null}
                </Text>
                <View style={styles.signup}>
                    <Text style={styles.textSignup}>Don't have account?</Text>
                    <CustomLink navigation={this.props.navigation}/>
                </View>
              </View>
            </View>
            </Container>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    
    },
    formOuter:{
        borderWidth:1,
        padding:20,
        borderRadius:20,
        width:'90%',
        backgroundColor:'#fff',
    },
    formHead:{
        fontSize:28,
        fontWeight:'bold',
        color:'#FF1493',
        textAlign:'center',
        marginVertical:20,
    },
    textInput:{
        width:'100%',
        borderWidth:1,
        borderRadius:40,
        borderColor:'#aaa',
        shadowOpacity:0.3,
        padding:10,
        paddingLeft:20,
        margin:10,
        alignSelf:'center',
    },
    notify:{
        color:'green',
        fontSize:18,
        marginVertical:10,
        textAlign:'center',
    },
    signup:{
        flexDirection:'row',
        justifyContent:'center'
    },
    textSignup:{
        fontSize:18,
    },
    button:{
        padding:10,
        backgroundColor:'#FF1493',
        borderRadius:30,
        marginTop:15,
    },
    fbButton:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'blue',
        borderRadius:30,
        marginTop:15,
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
    },
    passwordField:{
        flexDirection:'row',
        width:'100%',
        borderWidth:1,
        borderRadius:40,
        borderColor:'#aaa',
        shadowOpacity:0.3,
        padding:10,
        paddingLeft:20,
        margin:10,
        alignSelf:'center',
      }
})

export default Login;
