import React from 'react';
import {StyleSheet} from 'react-native';

export const globalStyles =StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          margin:10,
          // marginTop:15,
          // marginHorizontal:25,
        },
        textContainer:{
          borderRadius:2,
          borderWidth:1,
          margin:10,
          // borderShadow:3,
        },
        textContent:{
          fontSize:20,
          padding:10,
          // textAlign:'center'
          // fontFamily:'oswald-bold',
        },
        icon:{
          textAlign:'center',
          marginTop:20,
          marginBottom:15,
        },
        input:{
        //   borderWidth:1,
          padding:10,
        //   height:'50%',
          borderColor:'#ddd',
          borderBottomWidth:1,
          margin:10,
          fontSize:18,
          
        },
        errorText:{
          textAlign:'center',
          color:'red',
          marginBottom:4,
        },
        button:{
            padding:10,
            backgroundColor:'#FF1493',
            borderRadius:30,
            marginTop:15,
        },
        buttonText:{
            color:'#fff',
            fontSize:20,
            textAlign:'center',
        },
        
      
});

// export const imgs = {
//   ratings:{
//       '1':require('../assets/rating-1.png'),
//       '2':require('../assets/rating-2.png'),
//       '3':require('../assets/rating-3.png'),
//       '4':require('../assets/rating-4.png'),
//       '5':require('../assets/rating-5.png'),
//   }
// };