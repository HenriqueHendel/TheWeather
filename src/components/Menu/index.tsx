import React from 'react'
import {useNavigation, DrawerActions} from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, Touchable} from 'react-native'

import {Feather} from '@expo/vector-icons'

const Menu: React.FC = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container}  onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
            <Feather name='menu' size={36} color='#373737' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        width: 70,
        height: 70,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 40,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3
        }
    }
})

export default Menu