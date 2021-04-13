import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import {colors} from "../utils/index";

const { PRIMARY_COLORS, SECOONDARY_COLOR,BORDER_COLOR} = colors

const WeatherDetails = ({weatherData}) => {
    return (
        <View style={StyleSheet.weatherDetails}>
            <Text>Hi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails:{
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },  weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },

})

export default WeatherDetails
