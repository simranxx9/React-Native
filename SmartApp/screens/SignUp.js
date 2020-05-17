import React, { Component } from 'react';
import {View,Text,Button,StyleSheet, TextInput,Alert,TouchableOpacity} from 'react-native';
import firebase from '../config/firebaseConfig';
import Container from '../shared/container';
import { FontAwesome } from '@expo/vector-icons';

class SignUp extends Component{

    state={
        name:'',
        email:'',
        password:'',
        vaild:false,
        secure:true,
    }

    signUp = ({email,password,name})=>{
        if(password.length<6)
      {
        Alert.alert('Short Password','Password must be greater than 6 chars',[
          {text:'Understood',onPress:()=>console.log(password)}
        ])
      }
      else{
      firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      ).then(resp=>{
        console.log('created new account',email,resp.user.uid);
        alert('Account created successfully');
            firebase.firestore().collection('new_accounts').doc(resp.user.uid).set({
              document:['user created'],
              email:email,
              name:name,
              password:password,
              createdAt:Date.now(),
              uid:resp.user.uid,
            })
      }).then(()=>{
          this.props.navigation.navigate('Login');
      }).catch(err=>{
        console.log(err);
        alert(err);
      });
    }
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          this.setState({ email: text })
          this.setState({valid:false});
          return false;
        }
        else {
          this.setState({ email: text })
          this.setState({valid:true});
          console.log("Email is Correct");
        }

      }

    render(){
        return(
            <Container>
              <View style={styles.container}>
              <View style={styles.formOuter}>
                <Text style={styles.formHead}>
                    SIGNUP!
                </Text>
                <TextInput 
                placeholder='Name'
                style={styles.textInput} 
                onChangeText={name=>this.setState({name})}/>

                <TextInput 
                placeholder='e.g,test@mail.com'
                style={styles.textInput} 
                onChangeText={email=>this.validate(email)}
                />  
                <View style={styles.passwordField}>
                    <TextInput 
                    placeholder='Password'
                    secureTextEntry={this.state.secure}
                    onChangeText={password=>this.setState({password})}/>
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

                <TouchableOpacity style={styles.button} onPress={()=>{
                  if(this.state.valid){
                    this.signUp(this.state);
                  }
                  else{
                    alert('Email not valid');
                  }
                  }}>
                     <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

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
        color:'maroon',
        textAlign:'center',
        marginVertical:20
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
    button:{
      padding:10,
      backgroundColor:'maroon',
      borderRadius:30,
      marginTop:15,
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

export default SignUp;
