import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screens/Home';
import ReviewDetail from '../Screens/ReviewDetails';
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='GameZone' navigation={navigation} />
        }
      },
    },
    ReviewDetail: {
      screen: ReviewDetail,
      navigationOptions: {
        title: 'Review Details',
      }
    },
  };
  
  // home stack navigator screens
  const HomeStack = createStackNavigator(screens);
  
  export default HomeStack;