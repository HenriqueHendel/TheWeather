import React, {useEffect, useState} from 'react'
import { SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'

import api, {api_key} from '../../services/api'; 

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

interface ForecastProps {
  date: string
  weekday: string
  max: number
  min: number
  description: string
  condition: string
}

interface WeatherProps {
  results: {
    date: string,
    city_name: string,
    temp: string,
    wind_speedy: string,
    sunrise: string,
    sunset: string,
    humidity: string,
  }
}

export default function Home() {
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [weather, setWheater] = useState({} as WeatherProps);
    const [icon, setIcon] = useState({name: 'cloud', color: '#FFF'})
    const [forecast, setForecast] = useState<ForecastProps[]>([]);
    const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])

    useEffect(()=>{
      (async ()=>{
        let {status} = await Location.requestPermissionsAsync();
        
        if(status !== 'granted'){
          setErrorMessage('Permissão negada para acessar localização');
          setLoading(false)
          return
        }

        let {coords} = await Location.getCurrentPositionAsync({});
        

        const {data} = await api.get(`weather?key=${api_key}&lat=${coords.latitude}&lon=${coords.longitude}`);

        setWheater(data)
        setForecast(data.results.forecast)

        if(data.currently === 'noite'){
          setBackground(['#0c3741', '#0f2f61']);
        }

        switch(data.results.condition_slug){
          case 'clear_day':
            setIcon({name:' partly-sunny', color: '#FFB300'});
            break;

          case 'rain':
            setIcon({name:'rainy', color: '#FFF'});
            break;

          case 'storm':
            setIcon({name:'rainy', color: '#FFF'});
            break;
        }

        setLoading(false)
      })()
    },[])

    if(loading){
      return (
        <ActivityIndicator  />
      )
    }

    return (
        <SafeAreaView style={styles.container} >
            <Menu />
            <Header background={background} icon={icon} weather={weather} />
            <Conditions weather={weather} />
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: '5%'}}
                style={styles.list} 
                data={forecast}
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
