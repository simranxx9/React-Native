import React, { Component } from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

class Upload extends Component{
    render(){
        return(
            <View>
                <WebView
                originWhitelist={['*']}
                source={{ html: '<input type="file">' }}
                style={{flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center'}}
                />
            </View>

        )
    }
}

export default Upload;