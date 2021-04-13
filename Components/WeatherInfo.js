import React from 'react'
import { StyleSheet,View, Text,Image } from 'react-native';
import {colors} from "../utils/index";


const {PRIMARY_COLORS,SECOONDARY_COLOR,BORDER_COLOR} = colors

const WeatherInfo = ({weatherData}) => {
    const {
        main: {temp},
        weather: [details],
        name
    }= weatherData
    let {icon, main, description } = details
    let iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
            <Text style={styles.textPrimary}>{temp}&deg;</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo:{
        alignItems:"center"
    },
    weatherIcon:{
        width:100,
        height:100
    },
    weatherDescription:{
        textTransform: 'capitalize'
    },
    textPrimary:{
        fontSize:40,
        color: PRIMARY_COLORS

    },
    textSecondary:{
        fontSize:20,
        color: SECOONDARY_COLOR,
        marginTop:10,
        fontWeight: "500"
    }
})

export default WeatherInfo
