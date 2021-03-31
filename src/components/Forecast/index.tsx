import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Ionicons} from '@expo/vector-icons'

import {condition} from '../../utils/condition'

interface ForecastProps {
    item : {
        date: string;
        weekday: string;
        max: number
        min: number
        description: string
        condition: string
    }
}

const Forecast: React.FC<ForecastProps> = ({item}) => {
  let icon = condition(item.condition);

  return (
      <View style={styles.container} >

          <Text style={styles.date} >{item.date}</Text>
          <Ionicons name={icon.name} color={icon.color} size={25} />

          <View style={styles.degrees} >
              <Text>{item.min}°</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}} >{item.max}°</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    date: {
        fontSize: 14
    },
    degrees: {
        alignItems: 'center',
    }
})

export default Forecast;