import React,{useState} from 'react';
import {View,Text, Button,FlatList,TouchableOpacity,Modal,StyleSheet} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForms from './reviewForms';


export default function Home({navigation}){
    const [item,setItem] = useState([
        {key:'1',title:'Buy 1 get 2',body:'Lorem ipsum',rating:3},
        {key:'2',title:'You cant see me',body:'Lorem ipsum',rating:4},
        {key:'3',title:'You give me i lend u',body:'Lorem ipsum',rating:5},
        
    ]);
    const [modal,setModel] = useState(false);

    const addReview = (item)=>{
            item.key = Math.random().toString();
            setItem((prevItem) => {
                return [item,...prevItem];
            }
            )
            setModel(false);
    }

    return (
        <View style={globalStyles.container}>
         <Modal visible={modal} animationType='slide'>
             <View style={styles.modalContent}>
                <MaterialIcons name='close' size={28} style={globalStyles.icon}
                    onPress={()=>setModel(false)}
                />
                <ReviewForms addReview={addReview}/>
             </View>
         </Modal>
          <MaterialIcons name='add' size={28} style={globalStyles.icon}
              onPress={()=>setModel(true)}
          />
            <FlatList
            data={item}
            renderItem={({item})=>(
                <Card>
                    <TouchableOpacity 
                        onPress={()=>{navigation.navigate('ReviewDetail',item)}}>
                            <Text>{item.title}</Text>
                    </TouchableOpacity>
                </Card>
            )
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent:{
        flex:1,
    }
})

