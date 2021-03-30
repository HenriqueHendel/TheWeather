import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

import {Ionicons} from '@expo/vector-icons'

const Header = () => {
    return (
        <LinearGradient
            style={styles.header}
            colors={['#1ed6ff', '#97c1ff']}
        >
            <Text style={styles.date} >29/04/2021</Text>
            <Text style={styles.city} >Feira de Santana</Text>
            <Ionicons name='cloud' size={150}  color='#FFF' />

            <Text style={styles.weather} >30°</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    date: {
        color: '#FFF',
        fontSize: 17,
    },
    city: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    weather: {
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold'
    }
})

export default Header
