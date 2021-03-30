import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

const Drawer = createDrawerNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home}  options={{title: 'Minha Cidade'}} />
                <Drawer.Screen name='Search Page' component={SearchPage}  options={{title: 'Procurar'}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}