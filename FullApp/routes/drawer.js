import HomeStack from './HomeStack';
import AboutStack from './aboutStack';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const screens={
    Home:{
        screen:HomeStack,
    },
    About:{
        screen:AboutStack,
    }
}

const drawer = createDrawerNavigator(screens);

export default createAppContainer(drawer);
