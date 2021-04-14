import React, { useState, useEffect } from 'react';
import {StatusBar, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from "./Components/WeatherInfo";
import UnitsPicker from "./Components/UnitPicker";
import ReloadIcons from "./Components/ReloadIcons";
import {colors} from "./utils/index";
import WeatherDetails from "./Components/WeatherDetails";
import SearchInput from "./Components/SearchInput";

const BASE_URL ="https://api.openweathermap.org/data/2.5/weather?";
const API_KEY ="6c7dfb8e2c9513b228c770e7fc61392b";

export default function App() {
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoading]= useState(true)
  const [errorMsg, setErrorMsg] = useState(false);
  const [unitSystem, setUnitSystem] = useState('metric');
  const [text, setText]= useState("Nairobi");

  useEffect(() => {
  getData()
  }, [unitSystem]);

const getDataForCity =async () =>{

  try {
    setLoading(true)
    const url = `${BASE_URL}q=${text}&units=${unitSystem}&appid=${API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
  
    if(res.ok){
      setweatherData(result)
      setLoading(false)
    }else{
      setErrorMsg(true)
      setLoading(false)

    }
    
  } catch (error) {
    
  }

}

const getData =async()=>{
  try {
    setErrorMsg(false) //get around reload state change
    setweatherData(null)
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let {longitude, latitude} = location.coords;
    let WeatherURl = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${API_KEY}`;
    let res = await fetch(WeatherURl);
    let result = await res.json();
    // console.log(result)
    if(res.ok){
      setweatherData(result);
      setLoading(false);  
      setText("")
    }else{
      setErrorMsg(true)
    }
    
  } catch (error) {
    console.error(error)
    
  }

}

//if loading is not completly done show activity indicator
if(loading){
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.PRIMARY_COLORS}/>
      <StatusBar style="auto"/>
  </View>
    )
  

}

//if a request fails show the city was not found
if(errorMsg){
  return (
    <View style={styles.container}>
     < ReloadIcons load={getData}/>
      <Text style={styles.errorMsg}>City Not Found</Text>
      <StatusBar style="auto" />
    </View>
  );


}

//on successful request show the data

if(!loading && weatherData){

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.main}>
         < UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem}/>
         < ReloadIcons load={getData}/>
         < SearchInput text={text} setText={setText} getDataForCity={getDataForCity}/>
         <WeatherInfo weatherData={weatherData}/>
      </View>
        < WeatherDetails weatherData={weatherData} unitSystem={unitSystem}/>
    </View>
  );

}else if(errorMsg){

  return (
    <View style={styles.container}>
     < ReloadIcons load={getData}/>
      <Text >City Not Found</Text>
      <StatusBar style="auto" />
    </View>
  );


}else{

  return (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.PRIMARY_COLORS}/>
    <StatusBar style="auto"/>
</View>
  )


}

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main:{
    flex: 1,
    justifyContent: 'center'
  },
  errorMsg:{
    fontSize: 40,
     flex: 1,
     top: 300,
     left:40,
     alignItems: 'center',
     justifyContent: 'center',
     color:colors.PRIMARY_COLORS
  }
});
