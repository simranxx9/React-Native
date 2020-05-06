import React from 'react';
import {Formik } from 'formik';
import {globalStyles} from '../styles/globalStyles';
import { Button,View,TextInput,Text } from 'react-native';
import * as yup from 'yup';

const ReviewSchema = yup.object({
    title:yup.string()
        .required()
        .min(4),
    body:yup.string()
        .required()
        .min(8),
    rating:yup.string()
        .required()
        .test('is-num-1-5','Rating must be a number in 1-5',(val)=>{
            return parseInt(val)<6 && parseInt(val)>0;
        })
})


export default function ReviewForms({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{title:'',body:'',rating:''}}
                validationSchema={ReviewSchema}
                onSubmit={(values,actions)=>{
                    // console.log(values);
                    // actions.resetForm();
                    addReview(values);
                }}
            >
                {props=>(
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput 
                            multiline
                                style={globalStyles.input}
                            placeholder="Body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Rating"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <Button onPress={props.handleSubmit} title='Submit form'color="maroon"/>
                    </View>
                )}
            </Formik>
        </View>
    )
}