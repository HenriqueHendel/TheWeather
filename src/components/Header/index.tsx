import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

import {Ionicons} from '@expo/vector-icons'
import { DrawerItem } from '@react-navigation/drawer'

interface HeaderProps {
    background: string[]
    icon: {
        name: string | undefined,
        color: string
    }
    weather: {
        results: {
            date: string,
            city_name: string,
            temp: string
        }
    }
}

const Header: React.FC<HeaderProps> = ({background, icon, weather}) => {
    return (
        <LinearGradient
            style={styles.header}
            colors={background}
        >
            <Text style={styles.date} >{weather.results.date}</Text>
            <Text style={styles.city} >{weather.results.city_name}</Text>
            <Ionicons name='cloud' size={150} color={icon.color} />

            <Text style={styles.weather} >{weather.results.temp}°</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        height: '67%',
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
