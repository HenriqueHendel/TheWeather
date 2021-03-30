import React from 'react'
import { SafeAreaView, FlatList, StyleSheet } from 'react-native'

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const myList = [
    {
      "date": "30/03",
      "weekday": "Ter",
      "max": 27,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "31/03",
      "weekday": "Qua",
      "max": 24,
      "min": 16,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "01/04",
      "weekday": "Qui",
      "max": 23,
      "min": 14,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    },
    {
      "date": "02/04",
      "weekday": "Sex",
      "max": 23,
      "min": 16,
      "description": "Alguns chuviscos",
      "condition": "rain"
    },
    {
      "date": "03/04",
      "weekday": "Sáb",
      "max": 23,
      "min": 16,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "04/04",
      "weekday": "Dom",
      "max": 22,
      "min": 16,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "05/04",
      "weekday": "Seg",
      "max": 22,
      "min": 15,
      "description": "Tempo nublado",
      "condition": "cloud"
    },
    {
      "date": "06/04",
      "weekday": "Ter",
      "max": 20,
      "min": 15,
      "description": "Trovoadas dispersas",
      "condition": "storm"
    },
    {
      "date": "07/04",
      "weekday": "Qua",
      "max": 20,
      "min": 16,
      "description": "Tempo nublado",
      "condition": "cloud"
    },
    {
      "date": "08/04",
      "weekday": "Qui",
      "max": 21,
      "min": 16,
      "description": "Tempo nublado",
      "condition": "cloud"
    }
  ];

export default function Home() {
    return (
        <SafeAreaView style={styles.container} >
            <Menu />
            <Header />
            <Conditions />
            <FlatList 
                horizontal
                contentContainerStyle={{paddingBottom: '5%'}}
                style={styles.list} 
                data={myList}
                keyExtractor={(item) => item.date}
                renderItem={({item}) => <Forecast item={item} /> }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list: {
        marginTop: 10,
        marginLeft: 10
    }
})
