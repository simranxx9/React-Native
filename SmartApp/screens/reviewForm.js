import React from 'react';
import {Formik } from 'formik';
import {globalStyles} from '../globalStyles';
import { Button,View,TextInput,Text,TouchableOpacity,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as yup from 'yup';

const ReviewSchema = yup.object({
    Todo:yup.string()
        .required()
        .min(4)
        })


export default function ReviewForms({addTodo}){
    return(
        <ScrollView>
            <View style={globalStyles.container}>
            <Formik 
                initialValues={{Todo:''}}
                validationSchema={ReviewSchema}
                onSubmit={(values,actions)=>{
                    console.log(values);
                    // actions.resetForm();
                    addTodo(values);
                }}
            >
                {props=>(
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Add Todo..."
                            multiline
                            onChangeText={props.handleChange('Todo')}
                            value={props.values.Todo}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.Todo && props.errors.Todo}</Text>
                        
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <TouchableOpacity style={globalStyles.button} onPress={props.handleSubmit}>
                            <FontAwesome name='upload' style={globalStyles.buttonText} />
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
        </ScrollView>
    )
}