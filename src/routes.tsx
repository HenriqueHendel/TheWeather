import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from './pages/Home';

const Drawer = createDrawerNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}