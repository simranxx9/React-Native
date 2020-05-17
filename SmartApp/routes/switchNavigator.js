import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
// import Header from '../shared/header';

import Profile from '../screens/profile';
import Upload from '../screens/upload';

const screens = {
    Profile:{
        screen:Profile,
    },
    Upload:{
        screen:Upload,
    },
}

const RootStack = createSwitchNavigator(screens);

export default createAppContainer(RootStack);