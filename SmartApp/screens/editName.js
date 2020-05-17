import React from 'react';
import {Formik } from 'formik';
import {globalStyles} from '../globalStyles';
import { Button,View,TextInput,Text,TouchableOpacity,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as yup from 'yup';

const ReviewSchema = yup.object({
    name:yup.string()
        .required()
        .min(4)
        })


export default function EditName({editName,name}){
    return(
        <ScrollView>
            <View style={globalStyles.container}>
            <Formik 
                initialValues={{name:''}}
                validationSchema={ReviewSchema}
                onSubmit={(values,actions)=>{
                    console.log(values);
                    // actions.resetForm();
                    editName(values);
                }}
            >
                {props=>(
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder={name}
                            multiline
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
                        
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <TouchableOpacity style={globalStyles.button} onPress={props.handleSubmit}>
                            <FontAwesome name='edit' style={globalStyles.buttonText} />
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
        </ScrollView>
    )
}